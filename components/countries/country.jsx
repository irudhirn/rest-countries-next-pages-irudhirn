
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import classes from "./country.module.css";

const Country = ({ country }) => {
  const isDark = useSelector((state) => state.theme.isDark);
  const { name, flags, population, region, capital } = country;

  const style = flags ? { backgroundImage: `url('${flags?.png}')` } : {};

  return (
    <Link href={`/country-name/${name?.official?.toLowerCase()?.split(" ")?.join("-")}`} className={classes.link}>
      <div className={`${classes["country"]} ${isDark ? classes.dark : ""}`}>
        {/* <div className={classes["country__flag"]} style={style}></div> */}
        {/* <div className={classes["country__flag"]}> */}
          <Image src={`${flags?.png}`} alt={name?.common} width={300} height={340} className={classes["country__flag"]} />
        {/* </div> */}
        <div className={classes["country__overview"]}>
          <p className={classes["country__overview--name"]}>{name?.common}</p>
          <p className={classes["country__overview--population"]}>
            <span>Population</span>: {population}
          </p>
          <p className={classes["country__overview--region"]}>
            <span>Region</span>: {region}
          </p>
          <p className={classes["country__overview--capital"]}>
            <span>Capital</span>: {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;