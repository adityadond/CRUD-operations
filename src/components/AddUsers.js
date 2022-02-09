import {
  FormControl,
  FormGroup,
  InputLabel,
  Typography,
  makeStyles,
  Input,
  Button,
} from "@material-ui/core";
import React, { useState }  from "react";
import { addUser } from "../service/api";
import { useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

function AddUsers() {
  const classes = useStyles();
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const navigate=useNavigate()

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value})
}

const addUserDetails=async()=>{
  await addUser(user)
  navigate("/all")
}
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
      </FormControl>
      <Button variant="contained" onClick={()=>addUserDetails()} color="primary">
        Add Users
      </Button>
    </FormGroup>
  );
}

export default AddUsers;
