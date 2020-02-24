import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";
const styles = theme => ({
  card: {
    maxWidth: 700,
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.text.secondary,
    fontSize: 24
  },
  media: {
    minHeight: 450
  }
});
const Home = props => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <Typography type="headline" component="h2" className={classes.title}>
          Welcome to Demo App
        </Typography>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Demo"
        ></CardMedia>
        <CardContent>
          <Typography type="body1" component="p">
            Demo App with authentication.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Home);
