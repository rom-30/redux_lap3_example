import React from 'react'
import { LikeButton, DeleteButton } from '..'

const DogCard = ({ doggo }) => {
  const { id, img, liked } = doggo

  const handleToggleLike = id => console.log('like dog', id)

  const handleDelete = id => console.log('delete dog', id)

  return (
    <div className="card">
      <img src={img} alt="random dog" />
      <LikeButton liked={liked} handleClick={() => handleToggleLike(id)} />
      <DeleteButton handleClick={() => handleDelete(id)} />
    </div>

  )
}

export default DogCard
