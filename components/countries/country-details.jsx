import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import classes from "./country-details.module.css";
import Link from 'next/link';

const CountryDetails = (props) => {
  const isDark = useSelector((state) => state.theme.isDark);

  const country = props.countryData;

  const style = country?.flags ? { backgroundImage: `url('${country?.flags?.png}')` } : {};

  return (
    <div className={classes["details"]}>
      {(country?.name?.official || country?.name) && (
        <Head>
          <title>{country?.name?.official || country?.name} | Rest Countries App</title>
          <meta name="description" content={country?.flags?.alt || "Rest Countries App - challenge by FrontendMentor.io"} />
          <meta property="twitter:card" content="website" />
          <meta property="twitter:title" content={`${country?.name?.official || country?.name} - Rest Countries App` || "Rest Countries App"} />
          <meta property="twitter:description" content={country?.flags?.alt || "Rest Countries App - challenge by FrontendMentor.io"} />
          <meta property="twitter:image" content={country?.flags?.png} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${country?.name?.official || country?.name} - Rest Countries App` || "Rest Countries App"} />
          <meta property="og:description" content={country?.flags?.alt || "Rest Countries App - challenge by FrontendMentor.io"} />
          <meta property="og:image" content={country?.flags?.png} />
          <meta property="og:url" content={`https://rest-countries-app-by-irudhirn.netlify.app`} />
          <meta property="og:site_name" content="Countries" />
          <meta property="og:country" content={country?.name?.official || country?.name} />
          <meta property="og:region" content={country?.region} />
          <meta property="og:capital" content={country?.capital} />
          {country?.currencies ? <meta property="og:currency" content={country?.currencies?.[`${Object.keys(country?.currencies)[0]}`]?.name} /> : null}
        </Head>
      )}
      <Link href="/">
        <button type="button" className={`${classes.back} ${isDark ? classes.dark : ""} ${classes.button}`}>
          <span>&#8592;</span>Back
        </button>
      </Link>
      {/* {countryDetail === undefined && <Error />} */}
      {/* {countryDetail !== undefined && ( */}
        <div className={classes["details__container"]}>
          {/* <div className={classes["details__flag"]} style={style}></div> */}
          {/* <div className={classes["details__flag"]}> */}
            <Image src={`${country?.flags?.png}`} alt={country?.name?.official || country?.name} width={560} height={450} className={classes["details__flag"]} />
          {/* </div> */}
          <div className={classes["details__text"]}>
            <h2 className={classes["details__name"]}>{country?.name?.official || country?.name}</h2>
            {/* <h2 className={classes["details__name"]}>{country?.name || country?.name?.official}</h2> */}
            <div className={classes["details__overview"]}>
              <div className={classes["details__overview--main"]}>
                <p className={classes["main__native-name"]}>
                  <span>Native Name: </span>
                  {/* {nativeName} */}
                  {/* {country?.nativeName} */}
                  {/* {country?.nativeName || country?.name?.["nativeName"]?.[`${Object.keys(country?.name?.["nativeName"])[0]}`]?.["common"]} */}
                  {country?.name?.["nativeName"]?.[`${Object.keys(country?.name?.["nativeName"])[0]}`]?.["common"] || country?.nativeName}
                </p>
                <p className={classes["main__population"]}>
                  <span>Population: </span>
                  {country?.population}
                </p>
                <p className={classes["main__region"]}>
                  <span>Region: </span>
                  {country?.region}
                </p>
                <p className={classes["main__sub-region"]}>
                  <span>Sub Region: </span>
                  {country?.subregion}
                </p>
                <p className={classes["main__capital"]}>
                  <span>Capital: </span>
                  {country?.capital}
                </p>
              </div>
              <div className={classes["details__overview--extras"]}>
                <p className={classes["extras__domain"]}>
                  <span>Top Level Domain: </span>
                  {country?.tld}
                </p>
                <p className={classes["extras__currencies"]}>
                  <span>Currencies: </span>
                  {/* {currency} */}
                  {/* {country?.currencies} */}
                  {country?.currencies ? country?.currencies?.[`${Object.keys(country?.currencies)[0]}`]?.name : "No currency found"}
                </p>
                <p className={classes["extras__languages"]}>
                  <span>Languages: </span>
                  {country?.language}
                </p>
              </div>
            </div>
            <div className={classes["details__borders"]}>
              <h3 className={classes["details__borders--title"]}>Border Countries:</h3>
              <div className={classes["details__border--countries"]}>
                {country?.borders ? (
                  country?.borders?.map((border, i) => {
                    return (
                      <Link key={border} href={`/country-code/${border}`}>
                        <button
                          className={`${classes["border-country"]} ${isDark ? classes.dark : ""} ${classes.button}`}
                          // onClick={() => getCountryByCode(border)}
                        >
                          {border}
                        </button>
                      </Link>
                    );
                  })
                ) : (
                  <button className={`${classes["border-country"]} ${isDark ? classes.dark : ""} ${classes.button}`} disabled>
                    No bordering country.
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  )
}

export default CountryDetails;