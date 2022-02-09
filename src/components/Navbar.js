import { AppBar, Toolbar,  makeStyles } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import React from "react";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})
function Navbar() {
    const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="./" component="h2">Code</NavLink>
        <NavLink className={classes.tabs} to="all" component="h2">All users</NavLink>
        <NavLink className={classes.tabs} to="add" component="h2">Add Users</NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
