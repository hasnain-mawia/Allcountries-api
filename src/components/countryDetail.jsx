import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import LoadingScreen from './loadingScreen';
import { Link, useLocation, useParams } from 'react-router-dom';
import Error from './Error';


function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get('name')
  const params = useParams()
  const countryName = params.country
  const {state} = useLocation()

  // console.log(state)

  const [countryData, SetCountryData] = useState(null)
  const [notfound, SetNotfound] = useState(false)
 
  const updateCountryState = (data) =>{
    
    SetCountryData({
      flags: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population.toLocaleString(),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      toplevelDomain: data.tld,
      currencies: Object.values(data.currencies ||{}).map((currency) => currency.name ).join(', '),
      languages: Object.values(data.languages || {}).join(', '),
      borders:[]
    })
    if (!data.borders) {
      data.borders = []
    }
    Promise.all(data.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res) => res.json())
      .then(([borderCountry]) => borderCountry.name.common)
    })).then((borders) => {
      SetCountryData((prevState) => ({...prevState, borders }))
    })
  }


  useEffect(()=>{
    if(state){
      updateCountryState(state);
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fulltext=true`).then(res => res.json())
    .then(([data])=>{
      updateCountryState(data);
    }).catch((err)=>{
      SetNotfound(true)
    })
  },[countryName])
  
  if(notfound){
    return <Error/>
  }
  return (
  countryData === null ? <LoadingScreen/> :(
  <>
  <div className="max-w-[1600px] mx-auto my-5 xs:px-4">
    <span onClick={()=>history.back()} ><IoIosArrowBack className='bg-[#e8e8e8] text-[45px] rounded-[50px] shadow-2xl cursor-pointer dark:bg-white dark:text-black duration-200'/></span>
  </div>
<div className="max-w-[1600px] mx-auto grid grid-cols-2 sm:grid-cols-1 gap-10 my-10 p-4">
  <div>
      <img className='h-auto shadow-xl' src={countryData.flags} alt=""/>
  </div>
  <div className="details">

  <h3 className='text-[50px] font-bold mb-5'>{countryData.name}</h3>

      <div className="flex flex-col gap-5 h-[250px] xs:h-[350px] flex-wrap">
              <p><b>Native Name: </b><span className="native-name">{countryData.nativeName || countryData.name}</span></p>
              <p><b>Population : </b><span className="population">{countryData.population}</span></p>
              <p><b>Region : </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region : </b><span className="Sub-region">{countryData.subregion}</span></p>
              <p><b>Capital : </b><span className="capital">{countryData.capital}</span></p>
              <p><b>Top Level Domain : </b><span className="topleveldomain">{countryData.toplevelDomain}</span></p>
              <p><b>Currency : </b><span className="currency">{countryData.currencies || '$'}</span></p>
              <p><b>Language : </b><span className="language">{countryData.languages || 'Nan'}</span></p>
      
  </div>
  <div className="my-10 xs:grid-cols-1 grid grid-cols-[20%_auto]">
      <b>Border countries : </b>
      <div className='flex flex-wrap gap-3' >
        {
        countryData.borders.map((border) => <Link className='bg-[#eeeeee] border-[1px] border-[#d2d2d2] px-3 py-1 rounded-sm dark:text-black ' key={border} to={`/${border}`}>{border}</Link>)
      }  
      </div>
  </div>
</div>
</div>
</>
  )
  )
}

export default CountryDetail
