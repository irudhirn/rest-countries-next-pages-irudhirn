export async function getAllCountries(){
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await res.json();

  return data;
}

export async function getRegionalCountries(region){
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data.")
  }

  const data = await res.json();

  return data;
}

export async function getCountryByName(name){
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data.")
    }

    const data = await res.json();

    return data;
}

export async function getCountryByCode(code){
  const res = await fetch(`https://restcountries.com/v2/alpha/${code}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await res.json();

  return data;
}