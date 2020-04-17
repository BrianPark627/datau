import React from "react";
import FriendAppBar from "./FriendsLayout/FriendAppBar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "181ch",
    backgroundColor: "#76838d",
  },
  inline: {
    display: "inline",
  },
}));

export default function FriendsPage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <FriendAppBar />
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Sandra Adams
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>{/* <Avatar alt="bp" src={bp} /> */}</ListItemAvatar>
          <ListItemText
            primary="5 Days Streak Achievement!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="#FFFFFF"
                >
                  Brian Park
                </Typography>
                {" — has been drinking enough water for 5 days"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      );
    </React.Fragment>
  );
}
