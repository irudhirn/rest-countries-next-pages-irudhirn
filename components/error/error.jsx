import React from "react";
import Link from "next/link";

import classes from "./error.module.css";
import { useSelector } from "react-redux";

const Error = (props) => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={classes.error}>
      <Link href="/">
        <button
          type="button"
          className={`${classes.back} ${isDark ? classes.dark : ""} ${classes.button}`}
        >
          <span>&#8592;</span>Back
        </button>
      </Link>
      <p className={classes["error__text"]}>Error {props.code}.</p>
      <p className={classes["error__text"]}>{props.code === "404" ? "Country not found." : props.code === "500" ? "Internal Server Error." : "Something went wrong."}</p>
    </div>
  );
};

export default Error;