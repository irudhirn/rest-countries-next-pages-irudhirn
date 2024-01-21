import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import classes from "./goToTop.module.css";

export default function GoToTop() {
  const [show, setShow] = useState(false);

  const isDark = useSelector((state) => state.theme.isDark);

  function scrollToTop(){
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  function listenToScroll(){
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log("scrolled");
    if(winScroll > 300){
      setShow(true);
    }else{
      setShow(false);
    }    
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      {show && ( <button className={`${classes["go-to-top"]} ${isDark ? classes.dark : ""}`} onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></button> )}
    </div>
  )
}
