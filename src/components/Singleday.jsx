import React from 'react'
import DayResults from './DayResults'
import SearchBar from './Searchbar'

function Singleday() {
  return (
    <>
      <br />
      <SearchBar prefix={`☀️ Daily Outlook for`} />
      <DayResults display='hourly' />
    </>
  )
}

export default Singleday