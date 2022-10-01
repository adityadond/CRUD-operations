import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "./../redux/actions";
import { color } from "@mui/system";

function AddUser() {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState("");
  const { name, email, contact, address } = state;
  let navigate = useNavigate();

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
      dispatch(addUsers(state));
      navigate("/");
      setError("");
    }
  };
  return (
    <div className="main">
      <Button
        style={{ width: "100px", marginTop: "20px",marginBottom:"20px",marginRight:"600px" }}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
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
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          variant="standard"
          value={email}
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          variant="standard"
          value={contact}
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address}
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
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default AddUser;
