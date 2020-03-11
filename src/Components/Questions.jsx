import React, { Component } from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { forwardRef } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {}
    };
  }
  render() {
    return (
      <div className="questions">
        <Button>+ Add New</Button>
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            options={{
              paging: false,
              search: false,
              showTitle: false,
              minBodyHeight: "1000px",
              showSelectAllCheckbox: true,
              draggable: false,
              selection: true,
              header: false,
              headerStyle: { padding: "10px" },
              toolbar: false
              // padding: "100px"
            }}
            columns={[
              { title: "Adı", field: "name" },
              { title: "Soyadı", field: "surname" },
              { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
              {
                title: "Doğum Yeri",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
              }
            ]}
            data={[
              {
                name: "question 1",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63
              },
              {
                name: "question 2",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63
              }
            ]}
            icons={{
              SortArrow: forwardRef((props, ref) => (
                <ArrowDownward {...props} ref={ref} />
              ))
            }}
            title="TITLE"
          />
        </div>
      </div>
    );
  }
}

export default Question;

// import Button from "@material-ui/core/Button";
// import { Table, Column, HeaderCell, Cell } from "rsuite-table";
// import Element from "./Element";
// import "../index.css";

// import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white
//   },
//   body: {
//     fontSize: 14
//   }
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.background.default
//     }
//   }
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700
//   }
// });

// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// class Questions extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           id: 1,
//           question: "Question1",
//           firstname: "Test"
//         }
//       ]
//     };
//   }

//   renderRows() {
//     return this.state.questions.map(question => (
//       <tr key={question}>
//         <td>{question}</td>
//       </tr>
//     ));
//   }

//   render() {
//     return (
//       <div className="questions">
//         <div className="tab-title">My Questions</div>
//         <Button>Add Question</Button>
//         <div>
//           <Table
//             height={"10%"}
//             data={this.state.data}
//             onRowClick={data => {
//               console.log(data);
//             }}
//           >
//             <Column width={"10"} align="left" fixed>
//               <HeaderCell>Id</HeaderCell>
//               <Cell dataKey="id" />
//             </Column>

//             <Column width={"10"} fixed>
//               <HeaderCell>Q</HeaderCell>
//               <Cell dataKey="firstName" />
//             </Column>
//             <Column width={"10"} fixed="right">
//               <HeaderCell>A</HeaderCell>

//               <Cell>
//                 {rowData => {
//                   function handleAction() {
//                     alert(`id:${rowData.id}`);
//                   }
//                   return (
//                     <span>
//                       <a onClick={handleAction}> Edit </a> |{" "}
//                       <a onClick={handleAction}> Remove </a>
//                     </span>
//                   );
//                 }}
//               </Cell>
//             </Column>
//           </Table>
//         </div>
//       </div>
//     );
//   }
// }

// export default Questions;
