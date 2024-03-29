import React from 'react'
import Loading from '../assets/loading.gif'

function LoadingScreen() {
  return (
    <div className='flex justify-center items-center h-[90vh] bg-[#00000022]'>
      <img className='h-[70px] text-blue-500' src={Loading}/>
    </div>
  )
}

export default LoadingScreen
