import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import { TextField } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    maxWidth: "100%",
    height: "800px",
    marginTop: theme.spacing(0),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${"https://www.thelalit.com/wp-content/uploads/2017/01/Concierge-Service-Delhi.jpg"})`
  },

  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(15),
    paddingBottom: theme.spacing(2),
    border: "2px solid black",
    backgroundColor: "transparent"
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
const renderTextField = ({
  input,
  label,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

let Login = props => {
  const { handleSubmit, classes, formState } = props;

  return (
    <div>
      <Card className={classes.wrapper}>
        <form onSubmit={handleSubmit}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                type="headline"
                component="h2"
                className={classes.title}
              >
                Log In
              </Typography>
              <Field
                name="email"
                type="email"
                label="Email"
                component={renderTextField}
                className={classes.textField}
                margin="normal"
              />
              <br />
              <Field
                name="password"
                type="password"
                label="Password"
                component={renderTextField}
                className={classes.textField}
                margin="normal"
              />
              <br />
              {formState.error && (
                <Typography component="p" color="error">
                  <Icon color="error" className={classes.error}>
                    error
                  </Icon>
                  {formState.error}
                </Typography>
              )}
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className={classes.submit}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </form>
      </Card>
    </div>
  );
};

Login = reduxForm({
  form: "login"
})(Login);
export default withStyles(styles)(Login);
