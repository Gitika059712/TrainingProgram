import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import auth from "./authHelper";

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: "middle"
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2)
  }
});
class Login extends Component {
  state = {
    email: "",
    password: "",
    redirectToReferrer: false,
    error: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  clickSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined
    };

    axios
      .post(`http://localhost:3001/auth/login`, { user })
      .then(res => {
        if (res.error) {
          this.setState({ error: res.data.error });
        } else {
          auth.authenticate(res.data, () => {
            this.setState({ redirectToReferrer: true });
          });
        }

        console.log(res);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);

    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || {
      from: {
        pathname: "/"
      }
    };

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h2" className={classes.title}>
            Log In
          </Typography>
          <TextField
            id="email"
            type="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
          />
          <br />
          <TextField
            id="password"
            type="password"
            label="Password"
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChange("password")}
            margin="normal"
          />
          <br />{" "}
          {this.state.error && (
            <Typography component="p" color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
              {this.state.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={this.clickSubmit}
            className={classes.submit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(Login);
