import React from 'react'
import SearchBar from './Searchbar'
import WeekendResults from './WeekendResults';


function Weekend() {
  return (
    <div>
      <br />
      <SearchBar prefix = '☀️ Next 48 Hours for'/>
      <WeekendResults display ='hourly'/>
    </div>
  )
}

export default Weekend