import React from 'react'
import { Link } from 'react-router-dom'

function Card({name, flags, population, region, capital, data}) {
  return (
    <Link to={`/${name}`} state={data} className='overflow-hidden max-w-[320px] shadow-2xl border-[1px] border-_Dark rounded-xl'>
        <img className='w-[150%] h-[150px]'src={flags}/>
        <div className='p-3'>
        <h3 className='text-[27px] font-bold'>{name}</h3>
        <p><b>Population :</b> {population.toLocaleString()} </p>
        <p><b>Region : </b> {region}</p>
        <p><b>Capital : </b> {capital}</p>
        </div>
    </Link>
  )
}

export default Card