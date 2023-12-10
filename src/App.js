import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBone } from '@fortawesome/free-solid-svg-icons'
import { Doggos } from './pages';
import { fetchDoggos } from './actions';
import './styles/app.css';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error)

  const handleClick = () => dispatch(fetchDoggos())

  return (
    <>
      <h1>These Doggos endorse Redux</h1>
      {
        error && <div role='alert' id="error">{error.message}</div>
      }
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

export default App;
