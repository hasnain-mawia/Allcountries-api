import React from 'react';
import { FaSearch } from "react-icons/fa";


function ActionBar({Setquery}) {
  return (
    <div className='flex xs:flex-col justify-between items-center w-full max-w-[1600px] mx-auto my-10 xs:px-4'>
      <div className='sm:mb-3 py-3 px-5 flex items-center dark:bg-white dark:text-black gap-2 shadow-xl border-[1px] border-[#e8e8e8] rounded-lg'>
      <FaSearch />
      <input onChange={(e)=> Setquery(e.target.value.toLowerCase())} className="bg-transparent border-none outline-none w-[320px]" type="search" placeholder="Search for country..."/>
    </div>
    <div className='xs:w-[320px]'>
    <select name="" id="" onChange={(e)=> Setquery(e.target.value.toLocaleLowerCase())} className="xs:w-[320px] dark:text-black filter-by-region py-2 px-5 shadow-xl outline-none border-[1px] border-[#e8e8e8] rounded-lg">
                <option hidden>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
    </div>
    </div>
  )
}

export default ActionBar