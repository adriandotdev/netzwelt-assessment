import React, { useEffect } from 'react'
import axios from 'axios';

function App() {

  useEffect(() => {

    axios.get('https://netzwelt-devtest.azurewebsites.net/Territories/All', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }, [])

  return (
    <div>App</div>
  )
}

export default App