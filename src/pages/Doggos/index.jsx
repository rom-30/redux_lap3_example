import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DogCard } from '../../components';
import { fetchDoggos } from '../../actions';
import './style.css';

function Doggos() {
  const dispatch = useDispatch()
  const theDogs = useSelector(state => state.doggos)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(fetchDoggos())
  }, [])

  const renderDoggos = theDogs.map(dog => <DogCard key={dog.id} doggo={dog} />)

  return (
    <>
      {
        loading
          ? <h2>Loading . . .</h2>
          : <section aria-label="doggos" id="doggos">{renderDoggos}</section>
      }
    </>
  );
}

export default Doggos


