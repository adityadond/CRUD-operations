import React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, loadUsers } from "../redux/actions";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { makeStyles } from "@material-ui/core/styles";
import {useNavigate} from "react-router-dom"


const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      m: 1,
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));




const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

function Home() {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  const navigate = useNavigate ();
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete user?")) {
      dispatch(deleteUsers(id));
    }
  };
  return (
    <div>
      <div className={buttonStyles.root}>
        <Button style={{margin:"15px"}} variant="contained" color="secondary" onClick={()=>navigate("/addUser")}>
          Add User
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <div className={buttonStyles.root}>
                    <ButtonGroup
                      variant="outlined"
                     
                    >
                      <Button
                        style={{ marginRight: "5px" }}
                        color="primary"
                        onClick={() => deleteHandler(user.id)}
                      >
                        Delete
                      </Button>
                      <Button color="secondary"  onClick={() => navigate(`/editUser/${user.id}`)}>Edit</Button>
                    </ButtonGroup>
                  </div>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
