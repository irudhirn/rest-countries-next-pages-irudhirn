import React from 'react';

import CountryDetails from '@/components/countries/country-details';

import { getAllCountries, getCountryByCode } from '@/helper/helpers';

export default function CountryByCodePage(props) {
  if(!props.country){
    return (
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        alt="spinner"
        className="spinner"
      />
    )
  }

  return (
    <CountryDetails countryData={props.country}/>
  )
}

export async function getStaticProps(context){
  const { params } = context;

  const code = params.code;

  let data;
  try{
    data = await getCountryByCode(code);
  }catch(err){
    console.log(err);
  }

  if(!data){
    return {notFound: true}
  }

  return {
    props: {
      country: data
    }
  }
}

export async function getStaticPaths(){
  let data = [
    {params: {code: "ING"}},
    {params: {code: "BTN"}},
    {params: {code: "NPL"}},
    {params: {code: "USA"}},
    {params: {code: "GBR"}},
  ];
  // try{
  //   data = await getAllCountries();
  // }catch(err){
  //   console.log(err);
  // }

  return {
    paths: data,
    fallback: true
  }
}