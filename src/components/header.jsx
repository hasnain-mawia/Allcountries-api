import React, { useState } from 'react'
import { FaRegMoon, FaSun } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

function Header() {
   const [darkmode, setDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
   { darkmode ? document.body.classList.add('dark') : document.body.classList.remove('dark')}
  const toggleDarkMode = () =>{
      setDarkMode(!darkmode)
      localStorage.setItem('isDarkMode', !darkmode)
  }

  return (
    <header className='bg-white text-black dark:bg-[#2b3945] dark:text-white h-[80px] shadow-lg shadow-black/20 sticky top-0'>
        <div className="max-w-[1600px] xs:px-3 h-full mx-auto flex justify-between items-center">
           <h1 className='text-[26px] xs:text-[20px] font-semibold'><a href="/">Where in the worlds?</a></h1> 
           <div className='flex items-center gap-3'>  
           <div onClick={toggleDarkMode} className="'bg-white text-black dark:bg-[#fff] dark:text-[#2b3945] flex items-center gap-2 border-[1px] border-[#1b1b1b] p-2 rounded-3xl cursor-pointer">
           {darkmode ? <FaSun/>: <FaRegMoon/>} 
           {darkmode ? `Light Mode`: `Dark mode`}
            {/* <p>Dark Mode</p> */}
           </div>  
            <div onClick={()=>{
              location.reload()
            }}>
            <TbReload title='refresh' className='text-white text-[35px] rounded-full p-2 cursor-pointer bg-green-700 dark:bg-white dark:text-green-700'/>
            </div>
            </div>
           </div>  
    </header>
  )
}

export default Header