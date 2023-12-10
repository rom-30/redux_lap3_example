const initState = {
  doggos: [],
  loading: false
}

const doggosReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_DOGGOS':
      return ({ ...state, doggos: action.payload, error: false })

    case 'TOGGLE_LIKE_DOGGO':
      // We have to do the extra work because we are not connected to anything
      const dogToLike = state.doggos.find(d => d.id === action.payload)
      const likeIdx = state.doggos.indexOf(dogToLike)

      const updatedDoggosLike = [
        ...state.doggos.slice(0, likeIdx),
        { ...dogToLike, liked: !dogToLike.liked },
        ...state.doggos.slice(likeIdx + 1)
      ]
      return { ...state, doggos: updatedDoggosLike }

    case 'DELETE_DOGGO':
      const updatedDogs = state.doggos.filter(d => d.id !== action.payload)
      return { ...state, doggos: updatedDogs }

    case 'SET_ERROR':
      return { ...state, error: action.payload }

    default:
      return state;
  }
}

export default doggosReducer;
