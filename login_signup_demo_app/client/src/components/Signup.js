import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { TextField } from "@material-ui/core";

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
let Signup = props => {
  const { handleSubmit, classes, formState } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
              className={classes.title}
            >
              Sign Up
            </Typography>
            <div>
              <Field
                className={classes.textField}
                label="First Name"
                name="firstname"
                margin="normal"
                type="text"
                component={renderTextField}
              />
            </div>
            <br />
            <div>
              <Field
                label="Last Name"
                name="lastname"
                type="text"
                component={renderTextField}
                className={classes.textField}
                margin="normal"
              />
            </div>
            <br />
            <div>
              <Field
                label="Address"
                name="address"
                className={classes.textField}
                margin="normal"
                type="text"
                component={renderTextField}
              />
            </div>
            <br />
            <div>
              <Field
                label="Contact"
                type="text"
                className={classes.textField}
                margin="normal"
                name="contact"
                component={renderTextField}
              />
            </div>
            <br />
            <div>
              <Field
                label="Email"
                type="email"
                className={classes.textField}
                margin="normal"
                component={renderTextField}
                name="email"
              />
            </div>
            <br />
            <div>
              <Field
                label="Password"
                type="password"
                className={classes.textField}
                margin="normal"
                component={renderTextField}
                name="password"
              />
            </div>
            <br />
            <div>
              <Field
                label="Choose a Image"
                type="file"
                className={classes.textField}
                margin="normal"
                component={renderTextField}
                name="file"
              />
            </div>
            <br />
            {formState.error && (
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
              type="submit"
              className={classes.submit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
      <Dialog open={formState.open} disableBackdropClick={true}>
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
};

Signup = reduxForm({
  form: "signIn"
})(Signup);

export default withStyles(styles)(Signup);
