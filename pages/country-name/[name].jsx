import React from 'react';

import CountryDetails from '@/components/countries/country-details';

import { getAllCountries, getCountryByName } from '@/helper/helpers';

export default function CountryByNamePage(props) {
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

  const name = params.name;

  let data = await getCountryByName(name?.split("-").join(" "));
  // try{
  //   data = await getCountryByName(name?.split("-").join(" "));
  // }catch(err){
  //   console.log(err);
  // }
  // console.log(data);
  // if(!data){
  //   return {notFound: true}
  // }

  return {
    props: {
      country: !Array.isArray(data) ? data : Array.isArray(data) ? data[0] : null
    }
  }
}

export async function getStaticPaths(){
  let data = [
    {params: {name: "republic-of-india"}},
    {params: {name: "united-states-of-america"}},
    {params: {name: "people's-republic-of-china"}},
    {params: {name: "state-of-israel"}},
    {params: {name: "united-kingdom-of-great-britain-and-northern-ireland"}},
  ];
  // try{
  //   data = await getAllCountries();
  // }catch(err){
  //   console.log(err);
  // }

  return {
    // paths: data?.slice(0, 100)?.map((country) => ({params: {name: country?.name?.common?.toLowerCase().split(" ").join("-")}})),
    paths: data,
    fallback: true
  }
}