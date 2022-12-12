import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },

  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(avatar, name, age, role, city, company) {
  return ({ avatar, name, age, role, city, company } = createData);
}

export default function CustomizedTables() {
  const [userData, setUserData] = useState([]);

  const printUserData = () => {
    fetch("https://63969cb3a68e43e418074793.mockapi.io/userdata")
      .then((data) => data.json())
      .then((res) => setUserData(res));
  };
  useEffect(() => {
    printUserData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 1370, minHeight: 600 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Role</StyledTableCell>
            <StyledTableCell align="center">Company</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                <img src={data.avatar} alt="Loading..."></img>;
              </StyledTableCell>
              <StyledTableCell align="center">{data.name}</StyledTableCell>
              <StyledTableCell align="center">{data.role}</StyledTableCell>
              <StyledTableCell align="center">{data.company}</StyledTableCell>
              <StyledTableCell align="center">{data.city}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
