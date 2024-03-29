import React, { useState } from 'react'
import ActionBar from './components/actionbar';
import CountriesList from './components/countriesList';

function Home() {
    const [Query, Setquery] = useState('');
    return (
      <>
        <ActionBar Setquery={Setquery}/>
        <CountriesList Query={Query}/>
      </>
    )
}

export default Home
