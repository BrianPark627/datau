import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Questions from "./Questions";
import Dashboard from "./Dashboard";
import "../index.css";
import logo from "../assets/logo.png";
import help_button from "../assets/help-circle-outline.png";
import settings_button from "../assets/cog-outline.png";
import dashboard_button from "../assets/view-dashboard-variant.png";
import chart_button from "../assets/chart-line-variant.png";
import friend_button from "../assets/account-multiple.png";
import logout_button from "../assets/exit-to-app.png";
import { AuthUserContext, withAuthorization } from "./Session";
import SignOutButton from "./SignOutButton";
import { withFirebase } from "./Firebase";
import Statistics from "./Statistics";
import Friends from "./Friends";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      className="tab-panel"
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      width={"100%"}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    color: "white",
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minWidth: "100px",
    display: "flex",
    height: "100%",
    width: "100%",
    color: "white",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#76838D",
  },
}));

function Home(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [uid, setUid] = React.useState();
  const [name, setName] = React.useState();

  useEffect(() => {
    props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
        setUid(user.uid);
      } else {
        console.log("There is no logged in user");
      }
    });
  }, [name, uid]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            className={classes.tabs}
          >
            <div className="image">
              <img
                className="img"
                src={logo}
                onClick={() => setValue(1)}
                alt="Logo"
              />
            </div>
            <Tab
              label={
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      marginLeft: "20%",
                      marginRight: "5px",
                    }}
                  >
                    <img src={dashboard_button} alt="Dashboard_Button" />
                  </div>
                  <div>Dashboard</div>
                </div>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      marginLeft: "20%",
                      marginRight: "5px",
                    }}
                  >
                    <img src={help_button} alt="Help_Button" />
                  </div>
                  <div>Questions</div>
                </div>
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      marginLeft: "20%",
                      marginRight: "5px",
                    }}
                  >
                    <img src={chart_button} alt="Chart_Button" />
                  </div>
                  <div>Statistics</div>
                </div>
              }
              {...a11yProps(3)}
            />
            <Tab
              label={
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      marginLeft: "20%",
                      marginRight: "5px",
                    }}
                  >
                    <img src={friend_button} alt="Friend_Button" />
                  </div>
                  <div>Friends</div>
                </div>
              }
              {...a11yProps(4)}
            />
            <Tab
              label={
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      marginLeft: "20%",
                      marginRight: "5px",
                    }}
                  >
                    <img src={settings_button} alt="Account_Button" />
                  </div>
                  <div>Account</div>
                </div>
              }
              {...a11yProps(5)}
            />
            <Tab
              label={
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      marginLeft: "20%",
                      marginRight: "5px",
                    }}
                  >
                    <img src={logout_button} alt="Logout_Button" />
                  </div>
                  <div>Sign Out</div>
                </div>
              }
              {...a11yProps(6)}
            />
          </Tabs>
          <TabPanel value={value} index={1}>
            <Dashboard uid={uid} name={name} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Questions uid={uid} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Statistics uid={uid} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Friends />
          </TabPanel>
          <TabPanel value={value} index={5}>
            Account Settings
          </TabPanel>
          <TabPanel value={value} index={6}>
            <SignOutButton />
          </TabPanel>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}

const condition = (authuser) => !!authuser;
export default withFirebase(withAuthorization(condition)(Home));
