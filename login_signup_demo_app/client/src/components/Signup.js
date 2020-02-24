import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";

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
class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    address: "",
    contact: "",
    password: "",
    email: "",
    error: "",
    open: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  clickSubmit = event => {
    event.preventDefault();
    const user = {
      firstname: this.state.firstname || undefined,
      lastname: this.state.lastname || undefined,
      address: this.state.address || undefined,
      contact: this.state.contact || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    };

    axios
      .post(`http://localhost:3001/api/users`, { user })
      .then(res => {
        if (res.error) {
          this.setState({ error: res.data.error });
        } else {
          this.setState({ error: "", open: true });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
              className={classes.title}
            >
              Sign Up
            </Typography>
            <TextField
              id="firstname"
              label="FirstName"
              className={classes.textField}
              value={this.state.firstname}
              onChange={this.handleChange("firstname")}
              margin="normal"
            />
            <br />
            <TextField
              id="lastname"
              label="LastName"
              className={classes.textField}
              value={this.state.lastname}
              onChange={this.handleChange("lastname")}
              margin="normal"
            />
            <br />
            <TextField
              id="address"
              type="text"
              label="Address"
              className={classes.textField}
              value={this.state.address}
              onChange={this.handleChange("address")}
              margin="normal"
            />
            <br />
            <TextField
              id="contact"
              type="number"
              label="Contact"
              className={classes.textField}
              value={this.state.contact}
              onChange={this.handleChange("contact")}
              margin="normal"
            />
            <br />
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
            <br />
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
        <Dialog open={this.state.open} disableBackdropClick={true}>
          <DialogTitle>New Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              New account successfully created.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/signin">
              <Button color="primary" autoFocus="autoFocus" variant="contained">
                Log In
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(Signup);
