import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chart from "./Chart";
import { useEffect } from "react";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);

  useEffect(() => {
    if (props.uid) {
      axios.get(`http://localhost:4000/questions/${props.uid}`).then((res) => {
        const q = res.data;
        setQuestions(q);
      });
    }
  }, [props]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buildTabs = () => {
    let size = questions.length;
    let tabs = [];
    for (let i = 1; i <= size; i++) {
      tabs.push(
        <Tab label={`${questions[i - 1].question}`} {...a11yProps(i - 1)} />
      );
    }
    return tabs;
  };

  const buildTabPanels = () => {
    let size = questions.length;
    let tabPanels = [];
    for (let i = 1; i <= size; i++) {
      tabPanels.push(
        <TabPanel value={value} index={i - 1}>
          <Chart question={questions[i - 1]} />
        </TabPanel>
      );
    }
    return tabPanels;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {buildTabs()}
        </Tabs>
      </AppBar>
      {buildTabPanels()}
    </div>
  );
}
