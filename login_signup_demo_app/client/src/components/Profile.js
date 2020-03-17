import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import auth from "./authHelper";
import { findUserProfile } from "./apiHelper/profileHelper";
import DeleteUser from "./DeleteUser";

const styles = theme => ({
  wrapper: {
    maxWidth: "100%",
    height: "1050px",
    marginTop: theme.spacing(0),
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"https://www.elsetge.cat/myimg/f/192-1928136_best-steam-profile-backgrounds-orange-steam-profile-background.jpg"})`,
    backgroundSize: "cover"
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(15),
    paddingBottom: theme.spacing(2),
    border: "2px solid black",
    backgroundColor: "transparent"
  }
});

const Profile = props => {
  const [state, setuser] = useState({ user: "", redirectToSignin: false });

  const init = userId => {
    const jwt = auth.isAuthenticated();
    findUserProfile(
      {
        userId: userId
      },
      { t: jwt.token }
    ).then(data => {
      if (data.error) {
        setuser({ redirectToSignin: true });
      } else {
        setuser({ user: data });
      }
    });
  };
  useEffect(() => {
    init(props.match.params.userId);
  }, [props.match.params.userId]);

  const { classes } = props;
  const redirectToSignin = state.redirectToSignin;
  if (redirectToSignin) {
    return <Redirect to="/login" />;
  }

  return (
    <Card className={classes.wrapper}>
      <div>
        <Card className={classes.card} elevation={4}>
          <Typography type="title" className={classes.title}>
            Profile
          </Typography>
          <List dense>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  src={"data:image/jpeg;base64" + state.user.image}
                ></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={state.user.firstname}
                secondary={state.user.email}
              />
              <br />
            </ListItem>
            {auth.isAuthenticated().user &&
              auth.isAuthenticated().user._id === state.user._id && (
                <ListItemSecondaryAction>
                  <DeleteUser userId={state.user._id} />
                </ListItemSecondaryAction>
              )}
            <Divider />
          </List>
        </Card>
      </div>
    </Card>
  );
};

export default withStyles(styles)(Profile);
