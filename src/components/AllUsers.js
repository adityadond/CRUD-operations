import React, { useEffect, useState } from "react";
import { getUsers } from "../service/api";
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  table: {
      width: '90%',
      margin: '50px 0 0 50px'
  },
  thead: {
      '& > *': {
          fontSize: 20,
          background: '#000000',
          color: '#FFFFFF'
      }
  },
  row: {
      '& > *': {
          fontSize: 18
      }
  }
})


function AllUsers() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  return (
    <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map((user) => (
                <TableRow className={classes.row} key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    {/* <TableCell>
                        <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
                    </TableCell> */}
                </TableRow>
            ))}
        </TableBody>
    </Table>
)
}

export default AllUsers;
