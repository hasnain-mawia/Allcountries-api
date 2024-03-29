import React from 'react'
import { ShimmerThumbnail } from "react-shimmer-effects";

function CountryShimmerEffect() {
  const maped = Array.from({length:20}).map((el, index)=>{
    return (
      <ShimmerThumbnail height={280} rounded key={index}/>
      )
  })
  return (
      <div className="max-w-[1600px] mx-auto grid grid-cols-5 gap-5 xs:grid-cols-2 overflow-hidden mb-3"> 
       {
        maped
       }
    </div>
    
  )
}

export default CountryShimmerEffect
