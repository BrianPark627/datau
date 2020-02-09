import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Table } from "rsuite";
import Element from "./Element";

const { Column, HeaderCell, Cell } = Table;

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          question: "Question1",
          firstname: "Test"
        }
      ]
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
        <div>
          <Table
            height={500}
            data={this.state.data}
            onRowClick={data => {
              console.log(data);
            }}
          >
            <Column width={"30%"} align="left" fixed>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={"20%"} fixed>
              <HeaderCell>Question</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>
            <Column width={"20%"} fixed="right">
              <HeaderCell>Action</HeaderCell>

              <Cell>
                {rowData => {
                  function handleAction() {
                    alert(`id:${rowData.id}`);
                  }
                  return (
                    <span>
                      <a onClick={handleAction}> Edit </a> |{" "}
                      <a onClick={handleAction}> Remove </a>
                    </span>
                  );
                }}
              </Cell>
            </Column>
          </Table>
        </div>
      </div>
    );
  }
}

export default Questions;
