import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState,useEffect } from "react";
import Button from "@mui/material/Button";
import "./AddUser.css";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import {  getSingleUser, updateUser } from "./../redux/actions";
import { color } from "@mui/system";

function EditUser() {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState("");
  let {id}=useParams()
  const {user}=useSelector((state)=>state.data)
  const { name, email, contact, address } = state;
  let navigate = useNavigate();

useEffect(()=>{
    dispatch(getSingleUser(id))
},[])

useEffect(()=>{
    if(user){
        setState({...user})
    }
},[user])

  let dispatch = useDispatch();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all input fields");
    } else {
      dispatch(updateUser(state,id));
      navigate("/");
      setError("");
    }
  };
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Edit User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
          marginTop: 10,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          variant="standard"
          value={name || ""}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          variant="standard"
          value={email || " "}
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          variant="standard"
          value={contact || ""}
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address || ""}
          type="text"
          name="address"
          onChange={handleInputChange}
        />

        <div>
          <Button
            style={{ width: "100px" }}
            variant="contained"
            color="secondary"
            type="submit"
          >
          Update
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default EditUser;
