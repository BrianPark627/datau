import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chart from "./Chart";
import { Pie } from "react-chartjs-2";
import { FormLabel } from "@material-ui/core";

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

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  // create pie charts first one representing percentage of days you say yes for a datasets Week,
  // second is for a datasetsMonth, third is for a year
  const labels = ["YES", "NO"];
  const datasetsWeek = [
    {
      data: [80, 20],
      backgroundColor: ["green", "red"],
    },
  ];
  const datasetsMonth = [
    {
      data: [40, 60],
      backgroundColor: ["green", "red"],
    },
  ];
  const datasetsYear = [
    {
      data: [30, 70],
      backgroundColor: ["green", "red"],
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab label="Question One" {...a11yProps(0)} />
          <Tab label="Question Two" {...a11yProps(1)} />
          <Tab label="Question Three" {...a11yProps(2)} />
          <Tab label="Question Four" {...a11yProps(3)} />
          <Tab label="Question Five" {...a11yProps(4)} />
          <Tab label="Question Six" {...a11yProps(5)} />
          <Tab label="Question Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        {/* user inputted question  */}
        <Chart />
      </TabPanel>
      {/* Question Two pie charts */}
      <TabPanel value={value} index={1}>
        <Chart />
      </TabPanel>
      {/* Question Three pie charts */}
      <TabPanel value={value} index={2}>
        <Chart />
      </TabPanel>
      {/* Question four pie charts */}
      <TabPanel value={value} index={3}>
        <Chart />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Chart />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Chart />
      </TabPanel>
      {/* <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
