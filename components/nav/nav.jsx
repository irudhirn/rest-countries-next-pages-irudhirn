import React from "react";
// import { useContext } from "react";
// import { DarkContext } from "./contextStore/DarkModeProvider";

import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/redux/reducers/darkMode";

import classes from "./nav.module.css";
import Link from "next/link";

const Nav = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  
  return (
    <nav className={`${classes.nav} ${isDark ? classes["dark"] : ""}`}>
      <div className={classes["nav__elements"]}>
        <div className={classes.where}><Link href="/" style={{color: "inherit"}}>Where in the world?</Link></div>
        <div className={classes["dark-mode"]} onClick={() => dispatch(toggleDarkMode())}>
          <span className={classes.moon}>
            <i className="fa-solid fa-moon"></i>
          </span>
          Dark Mode
        </div>
      </div>
    </nav>
  );
};

export default Nav;