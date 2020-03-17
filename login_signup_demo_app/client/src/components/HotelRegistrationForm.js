import React, { useState } from "react";
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
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import { transparent } from "material-ui/styles/colors";

const styles = theme => ({
  wrapper: {
    maxWidth: "100%",
    height: "100%",
    marginTop: theme.spacing(0),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${"https://www.indesignlive.sg/wp-content/uploads/2018/01/web_Alley-on-25-Icehaus-Interior-Shot.jpg"})`
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    background: transparent,
    border: "2px solid black"
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
  const [pic, setPic] = useState({ image: "" });
  const [images, setImages] = useState([]);
  localStorage.setItem("gallery", JSON.stringify(images));
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
  const renderTextArea = ({ input, meta: { touched, error, warning } }) => (
    <div>
      <label>Brief Description of Hotel</label>
      <div>
        <textarea
          {...input}
          placeholder="Description"
          rows="10"
          cols="40"
          style={{ background: "transparent", border: "1px solid black" }}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
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
  const renderMultpileFileInput = ({
    input,
    label,
    meta: omitMeta,
    ...props
  }) => (
    <input
      multiple
      label={label}
      placeholder={label}
      onChange={onMultipleChangeImage}
      type="file"
      {...props.input}
      {...props}
    />
  );
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = _ => resolve(reader.result);
      reader.onerror = e => reject(e);
    });
  }
  const onMultipleChangeImage = e => {
    let files = Array.from(e.target.files);
    files = files.map(async file => ({
      content: await getBase64(file),
      fileName: file.name,
      contentType: file.type,
      length: file.size
    }));
    console.log(files);
    Promise.all(files).then(result => {
      console.log(result);
      var content = result.map(content => {
        return content.content;
      });
      setImages(...images, content);
    });
  };

  const onChangeImage = e => {
    var f = e.target.files[0];

    var reader = new FileReader();

    reader.onload = (function() {
      return function(e) {
        var binaryData = e.target.result;
        var image = reader.result;
        setPic({ ...pic, image: image });
        localStorage.setItem("image", binaryData);
      };
    })(f);

    reader.readAsDataURL(f);
  };
  var show = pic.image;
  var showText;

  if (show === "") {
    showText = "Upload Image";
  } else {
    showText = "Image Uploaded";
  }

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
                Register Hotel
              </Typography>
              <br />

              <div style={{ marginLeft: 232 }}>
                <Avatar
                  src={show}
                  style={{
                    height: 100,
                    width: 100
                  }}
                >
                  <Field
                    type="file"
                    className={classes.textField}
                    margin="normal"
                    component={renderFileInput}
                    name="file"
                    accept=".jpg, .png, .jpeg"
                  />
                </Avatar>
                <br />
              </div>
              <span>{showText}</span>

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
                  label="Address"
                  name="haddress"
                  type="text"
                  component={renderTextField}
                  className={classes.textField}
                  margin="normal"
                />
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
                  name="lng"
                />
              </div>
              <br />
              <div>
                <span>Other Details about Hotel</span>
              </div>
              <br />
              <Field
                label="Description"
                type="text"
                className={classes.textField}
                margin="normal"
                component={renderTextArea}
                name="description"
              />
              <br />
              <div>
                {images.map(img => {
                  return (
                    <img
                      src={img}
                      height="100px"
                      width="100px"
                      alt=" preview"
                    />
                  );
                })}
              </div>
              <br />
              <div>
                <Button
                  variant="outlined"
                  style={{
                    height: 50,
                    width: 270
                  }}
                >
                  <Field
                    type="file"
                    className={classes.textField}
                    margin="normal"
                    component={renderMultpileFileInput}
                    name="image"
                    accept=".jpg, .png, .jpeg"
                  />
                </Button>
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
      </Card>
      <Dialog open={formState.open} disableBackdropClick={true}>
        <DialogTitle>Hotel Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>Hotel Registered successfully .</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/dashboard">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              OK
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

HotelRegistrationForm = reduxForm({
  form: "signIn"
})(HotelRegistrationForm);

export default withStyles(styles)(HotelRegistrationForm);
