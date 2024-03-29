import React from 'react'
import { BiSolidError } from "react-icons/bi";

function Error() {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh] bg-[#ffffff]'>
        <BiSolidError className='text-[#f6754b] text-[200px]'/>
      <h2 className='text-[100px]'>!Oops</h2>
      <h2 className='text-[30px]'>Sorry! Page Not Found</h2>
    </div>
  )
}

export default Error
