import React, { Component } from "react";
import MaterialTable from "material-table";
import { Delete, Edit } from "@material-ui/icons";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Checkbox,
} from "@material-ui/core";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDialogOpen: false,
      dialogOpen: false,
      checked: false,
      editChecked: false,
      questions: [],
      question: "",
      currentQ: {},
    };
  }

  randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  createData = () => {
    let data = [];
    for (var question of this.state.questions) {
      data.push({
        name: question.qid,
        question: question.question,
        public: question.public === "1" ? "public" : "private",
      });
    }

    return data;
  };

  handleEditOpen = () => {
    this.setState({ editDialogOpen: true });
  };

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false, editDialogOpen: false, checked: false });
  };

  handleAdd = () => {
    let qid = this.randomString(
      20,
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    );

    axios
      .post("http://localhost:4000/questions", {
        uid: this.props.uid,
        qid: qid,
        question: this.state.question,
        public: this.state.checked ? "1" : "0",
      })
      .then((res) => {
        let q = this.state.questions;
        q.push({
          qid: qid,
          question: this.state.question,
          public: this.state.checked ? "1" : "0",
        });
        this.setState({ question: "", questions: q, checked: false });
      });
    this.setState({ dialogOpen: false });
  };

  handleEdit = () => {
    axios
      .put(`http://localhost:4000/questions/${this.state.currentQ.name}`, {
        uid: this.props.uid,
        qid: this.state.currentQ.name,
        question: this.state.question,
        public: this.state.editChecked ? "1" : "0",
      })
      .then((res) => {
        let q = this.state.questions;
        for (var i in q) {
          if (q[i].qid === this.state.currentQ.name) {
            q[i].question = this.state.question;
            q[i].public = this.state.editChecked ? "1" : "0";
          }
        }
        this.setState({
          questions: q,
          question: "",
          currentQ: {},
          editChecked: false,
        });
      });
    this.setState({ editDialogOpen: false });
  };

  handleChange = (event) => {
    this.setState({ question: event.target.value });
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/questions/${this.props.uid}`)
      .then((res) => {
        const questions = res.data;
        this.setState({ questions: questions });
      });
  }

  render() {
    console.log(this.state.editChecked);
    return (
      <div className="questions">
        <Button
          style={{ backgroundColor: "white" }}
          onClick={this.handleClickOpen}
        >
          ADD
        </Button>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new question</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Question"
              type="email"
              fullWidth
              onChange={this.handleChange}
            />
            <Checkbox
              onChange={(event) => {
                this.setState({ checked: event.target.checked });
              }}
            ></Checkbox>
            <label for="myinput" class="indented-checkbox-text">
              Public
            </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.editDialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit question</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Question"
              type="email"
              fullWidth
              defaultValue={this.state.currentQ.question}
              onChange={this.handleChange}
            />
            <Checkbox
              defaultChecked={this.state.editChecked}
              onChange={(event) => {
                this.setState({ editChecked: event.target.checked });
              }}
            ></Checkbox>
            <label for="myinput" class="indented-checkbox-text">
              Public
            </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleEdit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <div style={{ maxWidth: "100%", marginTop: "30px" }}>
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
            columns={[
              { title: "Question", field: "question" },
              { tite: "Public", field: "public" },
            ]}
            data={this.createData()}
            actions={[
              (rowData) => ({
                icon: () => <Edit />,
                tooltip: "Edit Question",
                onClick: (event, rowData) => {
                  console.log(rowData);
                  this.setState({
                    editChecked: rowData.public === "public" ? true : false,
                    currentQ: rowData,
                    editDialogOpen: true,
                  });
                },
              }),
              (rowData) => ({
                icon: () => <Delete />,
                tooltip: "Delete Question",
                onClick: (event, rowData) =>
                  axios
                    .delete(`http://localhost:4000/questions/${rowData.name}`)
                    .then((res) => {
                      let q = this.state.questions;
                      q = q.filter((obj) => {
                        return obj.qid !== rowData.name;
                      });
                      this.setState({ questions: q });
                    }),
              }),
            ]}
          />
        </div>
      </div>
    );
  }
}

export default Question;
