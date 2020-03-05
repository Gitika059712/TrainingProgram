import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Field, reduxForm } from "redux-form";
import { TextField } from "@material-ui/core";
import Navbar from "./NavBar";

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

let HotelRegistrationForm = props => {
  const { handleSubmit, classes, formState } = props;

  const onChangeImage = e => {
    var f = e.target.files[0];

    var reader = new FileReader();

    reader.onload = (function() {
      return function(e) {
        var binaryData = e.target.result;

        var base64String = window.btoa(binaryData);

        localStorage.setItem("image", base64String);
      };
    })(f);

    reader.readAsDataURL(f);
  };

  const renderFileInput = ({ input, label, meta: omitMeta, ...props }) => (
    <input
      style={{ display: "" }}
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

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
              className={classes.title}
            >
              Register Hotel
            </Typography>
            <br />

            <div style={{ marginLeft: 232 }}>
              <Avatar style={{ height: 100, width: 100 }}></Avatar>
              <br />
            </div>
            <div>
              <Field
                type="file"
                className={classes.textField}
                margin="normal"
                component={renderFileInput}
                name="file"
                accept=".jpg, .png, .jpeg"
              />
            </div>
            <br />

            <div>
              <Field
                className={classes.textField}
                label="Hotel Name"
                name="hotelname"
                margin="normal"
                type="text"
                component={renderTextField}
              />
            </div>
            <br />
            <div>
              <Field
                label="Hotel Contact"
                type="text"
                className={classes.textField}
                margin="normal"
                name="hotelcontact"
                component={renderTextField}
              />
            </div>
            <br />
            <div>
              <Field
                label="Hotel Email"
                type="text"
                className={classes.textField}
                margin="normal"
                name="hotelemail"
                component={renderTextField}
              />
            </div>
            <br />
            <div>
              <Field
                label="Hotel Website"
                type="text"
                className={classes.textField}
                margin="normal"
                name="hotelwebsite"
                component={renderTextField}
              />
            </div>
            <br />
            <div>
              <span>Address</span>
            </div>
            <br />
            <div>
              <Field
                label="Hotel City"
                name="hotelcity"
                type="text"
                component={renderTextField}
                className={classes.textField}
                margin="normal"
              />
            </div>
            <br />
            <div>
              <Field
                label="Hotel State"
                name="hotelstate"
                className={classes.textField}
                margin="normal"
                type="text"
                component={renderTextField}
              />
            </div>
            <br />

            <br />
            <div>
              <Field
                label="Pincode"
                type="text"
                className={classes.textField}
                margin="normal"
                component={renderTextField}
                name="pincode"
              />
            </div>
            <br />
            <div>
              <span>Geo</span>
            </div>
            <br />
            <div>
              <Field
                label="Latitude"
                type="text"
                className={classes.textField}
                margin="normal"
                component={renderTextField}
                name="lat"
              />
            </div>
            <br />
            <div>
              <Field
                label="Longitude"
                type="text"
                className={classes.textField}
                margin="normal"
                component={renderTextField}
                name="lon"
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
    </div>
  );
};

HotelRegistrationForm = reduxForm({
  form: "signIn"
})(HotelRegistrationForm);

export default withStyles(styles)(HotelRegistrationForm);
