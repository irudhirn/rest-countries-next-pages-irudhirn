import React from 'react';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

import { useSelector } from 'react-redux';

import classes from "./main-layout.module.css";
import GoToTop from '../goToTop/goToTop';

const Layout = (props) => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={`${classes.section} ${isDark ? classes.dark : ""}`}>
      <Nav />
      {props.children}
      <GoToTop />
      <Footer />
    </div>
  )
}

export default Layout