import React, { useState, useEffect } from 'react'
import data from './api/data'
import Deck from './components/deck'

function App () {

  return (
      <Deck data={data}/>
  )
}

export default App
