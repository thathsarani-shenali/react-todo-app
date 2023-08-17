import React from "react";
import logo from '../logo.png'; 
import classes from './header.module.css';

const Header=()=>{
    return (
        <div className={classes.header}>
            <img src={logo} alt="Logo" />
            <h1>to<span>do</span></h1>
        </div>
    );
}

export default Header;