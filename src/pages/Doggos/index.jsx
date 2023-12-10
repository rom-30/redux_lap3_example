import React from 'react'
import { DogCard } from '../../components'
import './style.css'

function Doggos() {
  let theDogs = [{ id: 1, img: '', liked: true }, { id: 1, img: '', liked: false }]
  let loading = true

  const renderDoggos = theDogs.map(dog => <DogCard key={dog.id} doggo={dog} />)

  return (
    <>
      {
        loading
          ? <h2>Loading . . .</h2>
          : <section aria-label="doggos" id="doggos">{renderDoggos}</section>
      }
    </>
  )
}

export default Doggos
