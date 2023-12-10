import doggoReducer from './doggoReducer';

describe('doggo reducer', () => {
  test('it intialises with no dogs and loading of false', () => {
    const initReturn = doggoReducer(undefined, { type: '@@INIT' })
    expect(initReturn).toEqual({ doggos: [], loading: false })
  })

  test('it returns with updated array when a dogs are loaded', () => {
    const fakeLoad = doggoReducer(
      { doggos: [] },
      { type: 'LOAD_DOGGOS', payload: [{ id: 1 }, { id: 2 }] }
    )
    expect(fakeLoad).toMatchObject({
      doggos: [
        { id: 1 },
        { id: 2 }
      ]
    })
  })


  test('it returns with updated array when a dog is liked', () => {
    const fakeLike = doggoReducer(
      {
        doggos: [
          { id: 1, liked: false },
          { id: 2, liked: false }
        ]
      },
      { type: 'TOGGLE_LIKE_DOGGO', payload: 1 }
    )
    expect(fakeLike).toMatchObject({
      doggos: [
        { id: 1, liked: true },
        { id: 2, liked: false }
      ]
    })
  })

  test('it returns with updated array when a dog is deleted', () => {
    const fakeDelete = doggoReducer(
      {
        doggos: [
          { id: 1, liked: false },
          { id: 2, liked: false }
        ]
      },
      { type: 'DELETE_DOGGO', payload: 1 }
    )
    expect(fakeDelete).toMatchObject({
      doggos: [
        { id: 2, liked: false }
      ]
    })
  })
});
