import React, { useEffect } from "react";
import { Paper, Grid, makeStyles, Button } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MaterialTable from "material-table";
import axios from "axios";
import CalendarHeatmap from "react-calendar-heatmap";
import { Radar } from "react-chartjs-2";
import "react-calendar-heatmap/dist/styles.css";
import "../index.css";

// const chartData = {
//   labels: [
//     "Eating",
//     "Drinking",
//     "Sleeping",
//     "Designing",
//     "Coding",
//     "Cycling",
//     "Running",
//   ],
//   datasets: [
//     {
//       label: "Year to date",
//       backgroundColor: "rgba(179,181,198,0.2)",
//       borderColor: "rgba(179,181,198,1)",
//       pointBackgroundColor: "rgba(179,181,198,1)",
//       pointBorderColor: "#fff",
//       pointHoverBackgroundColor: "#fff",
//       pointHoverBorderColor: "rgba(179,181,198,1)",
//       data: [65, 59, 90, 81, 56, 55, 40],
//     },
//   ],
// };

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

function Dashboard(props) {
  const classes = useStyles();
  const [questions, setQuestions] = React.useState([]);
  const [response, setResponse] = React.useState([]);
  const [heatmapData, setHeatmapData] = React.useState([]);
  const [chartData, setChartData] = React.useState([]);

  var year = new Date().getFullYear();
  const beginDate = `${year}-01-01`;
  const endDate = `${year}-12-31`;

  useEffect(() => {
    if (props.uid) {
      axios
        .get(`http://localhost:4000/questions/unanswered/${props.uid}`)
        .then((res) => {
          const q = res.data;
          setQuestions(q);
        })
        .then(() => {
          axios
            .post(`http://localhost:4000/answers/${props.uid}`, {
              begin: beginDate,
              end: endDate,
            })
            .then((res) => {
              setHeatmapData(res.data);
            });
        })
        .then(() => {
          axios
            .post(`http://localhost:4000/answers/total/${props.uid}`, {
              begin: beginDate,
              end: endDate,
            })
            .then((res) => {
              setChartData(res.data);
            });
        });
    }
  }, [props, response]);

  var selected = [];

  const createData = () => {
    let data = [];
    for (var question of questions) {
      data.push({
        name: question.qid,
        question: question.question,
        public: question.public === "1" ? "public" : "private",
        yes: false,
      });
    }

    return data;
  };

  //     {
  //       label: "Year to date",
  //       backgroundColor: "rgba(179,181,198,0.2)",
  //       borderColor: "rgba(179,181,198,1)",
  //       pointBackgroundColor: "rgba(179,181,198,1)",
  //       pointBorderColor: "#fff",
  //       pointHoverBackgroundColor: "#fff",
  //       pointHoverBorderColor: "rgba(179,181,198,1)",
  //       data: [65, 59, 90, 81, 56, 55, 40],
  //     },
  const createRadar = () => {
    let Labels = chartData.map((a) => a.question);
    let datasets = [
      {
        label: "Year to Date",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "#52c8fa",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: chartData.map((a) => a.count),
      },
    ];

    return { labels: Labels, datasets: datasets };
  };
  console.log(chartData);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div>{`Good Evening, ${props.name}`}</div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
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
                selection: true,
              }}
              columns={[{ title: "Question", field: "question" }]}
              data={createData()}
              onSelectionChange={(data) => {
                selected = data;
              }}
            />
            <Button
              style={{
                backgroundColor: "#52c8fa",
                marginTop: "10px",
                width: "100%",
              }}
              onClick={() => {
                let selectedQuestions = selected.map((a) => a.name);
                axios
                  .post("http://localhost:4000/answers", {
                    qid: selectedQuestions,
                  })
                  .then((res) => {
                    setResponse(res);
                  });
              }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper className={classes.paper}>
            <Radar data={() => createRadar()} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} style={{ height: "100%" }}>
          <Paper className={classes.paper}>
            <CalendarHeatmap
              startDate={beginDate}
              endDate={endDate}
              values={heatmapData}
              classForValue={(value) => {
                if (!value) {
                  return "color-empty";
                }
                return `color-scale-${value.count}`;
              }}
            />
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
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
        </Grid> */}
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

export default Dashboard;
