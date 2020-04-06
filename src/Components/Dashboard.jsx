import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Delete, Edit } from "@material-ui/icons";
import MaterialTable from "material-table";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  paper: {
    height: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
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
          <Paper className={classes.paper}>
            <MaterialTable
              options={{
                actionsColumnIndex: -1,
                paging: false,
                search: false,
                showTitle: false,
                draggable: false,
                toolbar: false,
                header: false,
              }}
              columns={[{ title: "Question", field: "question" }, {}]}
              data={[
                {
                  name: "1",
                  question: "Did I drink water today?",
                },
                {
                  name: "2",
                  question: "Did I exercise today?",
                },
              ]}
              actions={[
                {
                  icon: () => <Edit />,
                  tooltip: "Edit Question",
                  onClick: (event, rowData) =>
                    alert("You saved " + rowData.name),
                },
                (rowData) => ({
                  icon: () => <Delete />,
                  tooltip: "Delete Question",
                  onClick: (event, rowData) =>
                    console.log("You want to delete " + rowData.name),
                  disabled: rowData.birthYear < 2000,
                }),
              ]}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <HighchartsReact
              highcharts={Highcharts}
              // constructorType="stockChart"
              options={{
                title: {
                  text: "My chart",
                },
                series: [
                  {
                    data: [1, 2, 3],
                  },
                ],
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
                  text: "My chart",
                },
                series: [
                  {
                    data: [1, 2, 3],
                  },
                ],
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
                  text: "My chart",
                },
                series: [
                  {
                    data: [1, 2, 3],
                  },
                ],
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
