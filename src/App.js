import React, { useState, useEffect } from 'react'
import Deck from './components/deck'

function App () {
  const workerData = [
    {
      name: 'Pete Mitchel',
      role: 'Stunt Double',
      liked: null,
      rate: '100',
      location: 'London',
      picUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/The_ROCK.jpg'
    }, {
      name: 'Daniel Dare',
      role: 'Stunt Double',
      liked: null,
      rate: '95',
      location: 'Machester',
      picUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Ryan_reynolds.jpg'
    }, {
      name: 'Susan Spielberg',
      role: 'Stunt Double',
      liked: null,
      rate: '105',
      location: 'Brighton',
      picUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Sandra_Bullock_Cannes.jpg'
    }
  ]

  const [workers, setWorkers] = useState(workerData);

  return (
      <Deck />
  )
}

export default App
