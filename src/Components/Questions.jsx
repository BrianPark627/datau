import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ["question1", "question2", "question3"]
    };
  }

  renderRows() {
    return this.state.questions.map(question => (
      <tr key={question}>
        <td>{question}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <div className="tab-title">My Questions</div>
        <Button>Add Question</Button>
        <table>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default Questions;
