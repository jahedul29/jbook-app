import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: "70%",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "#daebdf",
  },
  title: {
    fontSize: "23px",
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const Comment = (props) => {
  const { email, body, thumbnail } = props.comment;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.large}>
              <img src={thumbnail} alt="" />
            </Avatar>
          </Grid>
          <Grid item xs>
            <span className={classes.title}>{email}</span>
            <Typography>{body}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Comment;
