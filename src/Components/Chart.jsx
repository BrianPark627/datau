import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Pie } from "react-chartjs-2";
import { FormLabel } from "@material-ui/core";

// Variables for pie chart data
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

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {},
    };
  }

  render() {
    return (
      <div>
        <FormLabel>Did I eat Vegtables each day</FormLabel> <br /> <br />
        <FormLabel>Number of Yes/No per day over one week</FormLabel>
        <Pie
          data={{
            labels: labels,
            datasets: datasetsWeek,
          }}
          height="50%"
        />
        <FormLabel>Number of Yes/No per day over one month</FormLabel>
        <Pie
          data={{
            labels: labels,
            datasets: datasetsMonth,
          }}
          height="50%"
        />
        <FormLabel>Number of Yes/No per day over one year</FormLabel>
        <Pie
          data={{
            labels: labels,
            datasets: datasetsYear,
          }}
          height="50%"
        />
      </div>
    );
  }
}
export default Chart;
