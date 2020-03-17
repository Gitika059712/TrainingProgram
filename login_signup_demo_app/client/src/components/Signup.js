import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { TextField } from "@material-ui/core";
import { transparent } from "material-ui/styles/colors";

const styles = theme => ({
  wrapper: {
    maxWidth: "100%",
    height: "100%",
    marginTop: theme.spacing(0),

    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"https://www.raffles.com/assets/0/72/651/652/1701/0104df89-1430-4d7f-92ba-0ab3782af436.jpg"})`,
    backgroundSize: "cover"
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    border: "2px solid black",
    backgroundColor: transparent
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

let Signup = props => {
  const { handleSubmit, classes, formState } = props;
  const [pic, setPic] = useState({ image: "" });

  const onChangeImage = e => {
    var f = e.target.files[0];

    var reader = new FileReader();

    reader.onloadend = (function() {
      return function(e) {
        var image = reader.result;
        setPic({ ...pic, image: image });
        var binaryData = e.target.result;
        localStorage.setItem("image", binaryData);
      };
    })(f);

    reader.readAsDataURL(f);
  };

  const renderFileInput = ({ input, label, meta: omitMeta, ...props }) => (
    <input
      style={{ opacity: "0" }}
      label={label}
      placeholder={label}
      onChange={onChangeImage}
      type="file"
      {...props.input}
      {...props}
    />
  );

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
  var showText;
  if (pic.image === "") {
    showText = "Upload Image";
  } else {
    showText = "Image Uploaded";
  }
  var show = pic.image;

  return (
    <Card className={classes.wrapper}>
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
              <br />
              <div style={{ marginLeft: 232 }}>
                <Avatar src={show} style={{ height: 100, width: 100 }}>
                  <Field
                    type="file"
                    className={classes.textField}
                    margin="normal"
                    component={renderFileInput}
                    name="file"
                    accept=".jpg, .png, .jpeg"
                    label="Upload Image"
                  />
                </Avatar>

                <br />
              </div>
              <span>{showText}</span>

              <br />
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
                  className={classes.textField}
                  margin="normal"
                  component="select"
                  value="SELECT ROLE"
                  placeholder="Select a role"
                  name="role"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="hotelmanager">Hotel Manager</option>
                  <option value="customer">Customer</option>
                </Field>
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
    </Card>
  );
};

Signup = reduxForm({
  form: "signIn"
})(Signup);

export default withStyles(styles)(Signup);
