import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
  root: theme.mixins.gutters({
    maxWidth: 1000,
    margin: "auto",

    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.protectedTitle
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
    <div>
      {console.log(state.user._id)}
      <Paper className={classes.root} elevation={4}>
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
          </ListItem>
          {auth.isAuthenticated().user &&
            auth.isAuthenticated().user._id === state.user._id && (
              <ListItemSecondaryAction>
                <DeleteUser userId={state.user._id} />
              </ListItemSecondaryAction>
            )}
          <Divider />
        </List>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Profile);
