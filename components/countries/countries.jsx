import React, {Suspense} from "react";
import Head from "next/head";
import Header from "../header/Header";
import Country from "./Country";
import classes from "./Countries.module.css";

const Countries = ({ region, countries }) => {
  
  return (
    <Suspense
      fallback={
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="spinner"
          className={classes.spinner}
        />
      }
    >
      {countries?.length > 0 && (
        <Head>
          <title>{region === "All" ? "Rest Countries App" : `${region} | Rest Countries App`}</title>
          <meta name="description" content={"Rest Countries App - challenge by FrontendMentor.io"} />
          <meta property="twitter:card" content="website" />
          <meta property="twitter:title" content={region === "All Countries" ? "Rest Countries App" : `${region} | Rest Countries App` || "Rest Countries App"} />
          <meta property="twitter:description" content={region === "All" ? "Rest Countries App" : `${region} | Rest Countries App` || "Rest Countries App - challenge by FrontendMentor.io"} />
          <meta property="twitter:image" content={`https://www.shutterstock.com/image-vector/world-map-divided-into-six-600nw-792129898.jpg`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={region === "All Countries" ? "Rest Countries App" : `${region} | Rest Countries App` || "Rest Countries App"} />
          <meta property="og:description" content={region === "All Countries" ? "Rest Countries App" : `${region} | Rest Countries App` || "Rest Countries App - challenge by FrontendMentor.io"} />
          <meta property="og:image" content={`https://www.shutterstock.com/image-vector/world-map-divided-into-six-600nw-792129898.jpg`} />
          <meta property="og:url" content={`https://rest-countries-app-by-irudhirn.netlify.app`} />
          <meta property="og:site_name" content="Countries" />
          <meta property="og:region" content={region === "All Countries" ? "Rest Countries App" : region} />
        </Head>
      )}
      <Header region={region} />
      <div className={classes.countries}>
        {!countries?.length && (
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt="spinner"
            className={classes.spinner}
          />
        )}
        {countries?.length !== 0 && countries?.map((country, i) => ( <Country key={i} country={country} /> ))}
      </div>
    </Suspense>
  );
};

export default Countries;