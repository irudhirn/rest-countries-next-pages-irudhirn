import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { getAllCountries } from '@/helper/helpers'

import Countries from '@/components/countries/countries';
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  
  return (
    <>
      <Head>
        <title>Rest Countries | Pages Router - Next</title>
        <meta name="description" content="Rest Countries App - challenge by FrontendMentor.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Countries countries={props.countries} region="All" />
      </main>
    </>
  )
}

export async function getStaticProps(){
  // const res = await fetch("https://restcountries.com/v3.1/all");

  // const data = await res.json();
  let data;
  try{
    data = await getAllCountries();
  }catch(err){
    redirect("*");
  }

  return {
    props: {
      countries: data
    }
  }
}