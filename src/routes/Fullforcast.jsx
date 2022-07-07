import React, { useEffect, useState } from 'react'
import Results from '../components/Results'
import SearchBar from '../components/Searchbar'

function Fullforcast() {
 return (
   <>
    <br />
    <SearchBar  prefix={`☀️ Weekly Forecast for`} />
    <Results display ='daily'/>
    </>
  )
}

export default Fullforcast