import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBone } from '@fortawesome/free-solid-svg-icons'
import { Doggos } from './pages'
import './styles/app.css'

function App() {

  const handleClick = () => console.log('fetching doggos')

  return (
    <>
      <h1>These Doggos endorse Redux</h1>
      <h3 onClick={handleClick}
        aria-label="refresh"
        id="refresh"
      >
        fetch! <FontAwesomeIcon icon={faBone} />
      </h3>
      <Doggos />
    </>
  )
}

export default App
