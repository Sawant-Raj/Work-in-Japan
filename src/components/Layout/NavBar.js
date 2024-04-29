import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import Translate from "../translate/Translate"

const NavBar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/job-listings">Job Listings</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/about">About Japan</Link>
          </li>
        </ul>
        <div className={classes.translateContainer}>
        <Translate /> 
      </div>
      </nav>
    </>
  );
};

export default NavBar;
