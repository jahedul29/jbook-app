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
    backgroundColor: "#f2faf6",
  },
  paper: {
    maxWidth: 1100,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  title: {
    fontSize: "30px",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Post = (props) => {
  const { title, body, medium } = props.post;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.large}>
              <img src={medium} alt="" />
            </Avatar>
          </Grid>
          <Grid item xs>
            <span className={classes.title}>{title}</span>
            <Typography>{body}</Typography>
            {props.children}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Post;
