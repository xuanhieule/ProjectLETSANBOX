import { Avatar, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import React from "react";

ProfileHome.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    boxShadow: "none",
  },
  avt: {
    boxShadow: "none",
    width: "18rem",
    height: "18rem",
    margin: "0 auto",
    
  },
  fontOpen: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  font_name: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "2rem",
    fontWeight: 600,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  font_level: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "2rem",

    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  font_button: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: "1.6rem",
    textAlign: "center",
    boxShadow: "none",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    width:'100%',
    padding: '0, 3rem',
  },
}));

export default function ProfileHome(props) {
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX: ", props);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.font_name}>{props.user.userName}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.font_level}>{props.user.role}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avt} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
            <Button className={classes.font_button}>Xem trang cá nhân</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
