import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  paper: {
    height: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div>Good Evening, Brian</div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>My Questions</Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <HighchartsReact
              highcharts={Highcharts}
              // constructorType="stockChart"
              options={{
                title: {
                  text: "My chart"
                },
                series: [
                  {
                    data: [1, 2, 3]
                  }
                ]
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                title: {
                  text: "My chart"
                },
                series: [
                  {
                    data: [1, 2, 3]
                  }
                ]
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                title: {
                  text: "My chart"
                },
                series: [
                  {
                    data: [1, 2, 3]
                  }
                ]
              }}
            />
          </Paper>
        </Grid>
        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
