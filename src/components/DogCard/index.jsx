import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, deleteDoggo } from '../../actions';
import { LikeButton, DeleteButton } from '..';

const DogCard = ({ doggo }) => {
  const { id, img, liked } = doggo
  const dispatch = useDispatch()

  const handleToggleLike = id => dispatch(toggleLike(id))

  const handleDelete = id => dispatch(deleteDoggo(id))

  return (
    <div className="card">
      <img src={img} alt="random dog" />
      <LikeButton liked={liked} handleClick={() => handleToggleLike(id)} />
      <DeleteButton handleClick={() => handleDelete(id)} />
    </div>

  );
}

export default DogCard;
