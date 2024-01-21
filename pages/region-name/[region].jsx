import React from 'react';

import Countries from '@/components/countries/countries';
import { getRegionalCountries } from '@/helper/helpers';

export default function RegionPage(props) {
  return (
    <Countries countries={props.countries} region={props.region} />
  )
}

export async function getStaticProps(context){
  const { params } = context;
  // const res = await fetch("https://restcountries.com/v3.1/all");

  // const data = await res.json();

  const region = params.region;

  let data= await getRegionalCountries(region);
  // try{
  //   data = await getRegionalCountries(region);
  // }catch(err){
  //   redirect("*");
  // }

  return {
    props: {
      region: region,
      countries: data
    }
  }
}

export async function getStaticPaths(){
  let regions = [
    {params: {region: "Africa"}},
    {params: {region: "Americas"}},
    {params: {region: "Asia"}},
    // {params: {region: "Europe"}},
    {params: {region: "Oceania"}},
  ];
  return {
    paths: regions,
    fallback: true
  }
}