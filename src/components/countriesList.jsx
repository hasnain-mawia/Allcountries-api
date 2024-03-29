import React, { useEffect, useState } from 'react'
// import countriesList from '../data'
import Card from './card'
import CountryShimmerEffect from './countryShimmerEffect';

function CountriesList({Query}) {
  const [countriesData, setcountriesData] = useState([])

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then((data)=>{
      setcountriesData(data)
  })
  },[])
  return (
    <>
     {countriesData.length === 0 ? <CountryShimmerEffect/> :
      <div className="max-w-[1600px] mx-auto grid grid-cols-5 gap-5 xs:grid-cols-2 "> 
        {countriesData.filter((country)=>country.name.common.toLowerCase().includes(Query)||country.region.toLowerCase().includes(Query)).map((country, name) => {
       return(   
      <Card 
      key={country.name.common}
      name={country.name.common}
      flags={country.flags.svg} 
      population={country.population} 
      region={country.region} 
      capital={country.capital}
      data={country} />
       )
    })
    }
      </div>
      }
    </>
  )
}

export default CountriesList