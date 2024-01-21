import React from 'react';
import { useSelector } from "react-redux";
import Link from 'next/link';
import classes from "./footer.module.css";

export default function Footer() {
  const isDark = useSelector((state) => state.theme.isDark);
  
  return (
    <nav className={`${classes.footer} ${isDark ? classes["dark"] : ""}`}>
      <div className={classes["footer__elements"]}>
        <div className={classes.where}>Made by Rudhir Ingale</div>
        <div className={classes.where}><a href="https://github.com/irudhirn/rest-countries-next-pages-irudhirn" target="_blank" style={{color: "inherit"}}><i className="fa-brands fa-github"></i></a></div>
        <div className={classes["dark-mode"]} onClick={() => {}}>Built with NextJS Pages Router</div>
      </div>
    </nav>
  );
}
