import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Pie } from "react-chartjs-2";
import { FormLabel } from "@material-ui/core";
import axios from "axios";
import { BugReportTwoTone } from "@material-ui/icons";

// Variables for pie chart data
const labels = ["YES", "NO"];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {},
      week: [{}],
      month: [{}],
      year: [{}],
    };
  }

  componentDidMount() {
    if (this.props.question) {
      let end = new Date();
      let begin = new Date();
      begin.setMonth(begin.getMonth() - 12);
      let d = new Date(begin),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      begin = new Date([year, month, day].join("-"));
      axios
        .post(
          `http://localhost:4000/answers/question/${this.props.question.qid}`,
          {
            begin: begin,
            end: end,
          }
        )
        .then((res) => {
          let x = (res.data.length * 100) / 365;
          this.setState({
            year: [{ data: [x, 100 - x], backgroundColor: ["green", "red"] }],
          });
        })
        .then(() => {
          begin = new Date();
          begin.setMonth(begin.getMonth() - 1);
          let e = new Date(begin),
            month = "" + (e.getMonth() + 1),
            day = "" + e.getDate(),
            year = e.getFullYear();
          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;
          begin = new Date([year, month, day].join("-"));
          axios
            .post(
              `http://localhost:4000/answers/question/${this.props.question.qid}`,
              {
                begin: begin,
                end: end,
              }
            )
            .then((res) => {
              let x = (res.data.length * 100) / 30;
              this.setState({
                month: [
                  { data: [x, 100 - x], backgroundColor: ["green", "red"] },
                ],
              });
            });
        })
        .then(() => {
          begin = new Date();
          begin.setDate(begin.getDate() - 7);
          let f = new Date(begin),
            month = "" + (f.getMonth() + 1),
            day = "" + f.getDate(),
            year = f.getFullYear();
          if (month.length < 2) month = "0" + month;
          if (day.length < 2) day = "0" + day;
          begin = new Date([year, month, day].join("-"));
          axios
            .post(
              `http://localhost:4000/answers/question/${this.props.question.qid}`,
              {
                begin: begin,
                end: end,
              }
            )
            .then((res) => {
              let x = (res.data.length * 100) / 7;
              this.setState({
                week: [
                  { data: [x, 100 - x], backgroundColor: ["green", "red"] },
                ],
              });
            });
        });

      // });
    }
  }

  render() {
    return (
      <div>
        <FormLabel>{this.props.question.question}</FormLabel> <br /> <br />
        <FormLabel>Week to Date</FormLabel>
        <Pie
          data={{
            labels: labels,
            datasets: this.state.week,
          }}
          height="50%"
        />
        <FormLabel>Month to Date</FormLabel>
        <Pie
          data={{
            labels: labels,
            datasets: this.state.month,
          }}
          height="50%"
        />
        <FormLabel>Year to Date</FormLabel>
        <Pie
          data={{
            labels: labels,
            datasets: this.state.year,
          }}
          height="50%"
        />
      </div>
    );
  }
}
export default Chart;
