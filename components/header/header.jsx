import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';

import classes from "./header.module.css";

const Header = () => {
  const router = useRouter();

  const isDark = useSelector((state) => state.theme.isDark);
  
  const [countryName, setCountryName] = useState("");
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [regionText, setRegionText] = useState("Filter by Region");

  useEffect(() => {
    if (!router?.query?.region) setRegionText(() => "Filter by Region");
    if (router?.query?.region) setRegionText(() => router?.query?.region);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (countryName === "") return;

    router.push("/country-name/" + countryName.split(" ").join("-"));
    setCountryName("");
  };

  return (
    <header className={`${classes.header} ${isDark ? classes.dark : ""}`}>
      <form className={classes.formEl} onSubmit={submitHandler}>
        <div className={`${classes["search__input"]} ${isDark ? classes.dark : ""}`}>
          <span className={classes["search__input--search"]}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className={classes.inputEl}
            placeholder="Search for a country..."
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
        </div>
        <div className={`${classes["filter__input"]} ${isDark ? classes.dark : ""}`}>
          <div className={classes["filter__by__region"]} onClick={() => setIsRegionActive((prev) => !prev)}>
            {regionText === "All" ? "Filter by Region" : regionText}
          </div>
          <div className={`${classes.regions} ${isRegionActive ? classes.active : ""}`} onClick={() => setIsRegionActive(() => false)}>
            <Link href="/" style={{color: "inherit"}} onClick={() => { setRegionText(() => "All"); }}>
              <p className={classes.region}>
                All
              </p>
            </Link>
            <Link href="/region-name/Africa" style={{color: "inherit"}} onClick={() => { setRegionText(() => "Africa"); }}>
              <p className={classes.region}>
                Africa
              </p>
            </Link>
            <Link href="/region-name/Americas" style={{color: "inherit"}} onClick={() => { setRegionText(() => "America"); }}>
              <p className={classes.region}>
                America
              </p>
            </Link>
            <Link href="/region-name/Asia" style={{color: "inherit"}} onClick={() => { setRegionText(() => "Asia"); }}>
              <p className={classes.region}>
                Asia
              </p>
            </Link>
            <Link href="/region-name/Europe" style={{color: "inherit"}} onClick={() => { setRegionText(() => "Europe"); }}>
              <p className={classes.region}>
                Europe
              </p>
            </Link>
            <Link href="/region-name/Oceania" style={{color: "inherit"}} onClick={() => { setRegionText(() => "Oceania"); }}>
              <p className={classes.region}>
                Oceania
              </p>
            </Link>
          </div>
        </div>
      </form>
    </header>
  )
}

export default Header