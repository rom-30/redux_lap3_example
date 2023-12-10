import axios from 'axios';

export const toggleLike = dogId => ({ type: 'TOGGLE_LIKE_DOGGO', payload: dogId })

export const deleteDoggo = dogId => ({ type: 'DELETE_DOGGO', payload: dogId })

export const fetchDoggos = () => {
  return async (dispatch) => {
    try {
      // API will fetch 9 dogs
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random/9')

      dispatch({
        type: 'LOAD_DOGGOS',
        payload: data.message.map((url, i) => ({ id: i + 1, img: url, liked: false }))
      })
    } catch (err) {
      dispatch({
        type: 'SET_ERROR',
        payload: err
      })
    }
  }
}
