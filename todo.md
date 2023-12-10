# Redux Todos

## Install redux dependencies
- [x] Install redux, react-redux & @redux-devtools/extension
- [x] Wrap React app in Provider

## Decide what data we will keep in our global store
- [x] Make an initial global state
- [x] Add 'loading' and 'doggos' with some fake data

## Make a reducer function
- [x] Just a basic one for now! Always returns the state it receives

## Create your store
- [x] Use `redux`'s `createStore` and pass it your reducer

## Connect a component to the store
- [x] Import `useSelector` from `react-redux`
- [x] Use it to access loading from the store
- [x] Use it to access dogs from the store

## Define an action
- [x] Choose a sensible phrase describing what the action does eg. 'LOAD_DOGGOS' or 'LOADING'
- [x] Tell the reducer what to do if it receives that action 
- [x] Have the reducer return a new state no matter what action it received

## Dispatch actions to the reducer manually
- [x] Add redux devtools extension to your store
- [x] Use devtools to manually dispatch actions

## Dispatch actions to the reducer from your componont
- [x] Import `useDispatch` from `react-redux`
- [x] Use it to dispatch an action to the reducer

## Extend functionality
- [x] Add ability to dispatch actions to like a dog and delete a dog
- [x] Make action creator functions to clean up components

## Add an API call
- [x] Make a fetchDoggos action creator that makes a fetch request to the Dog API for 9 random images
  - [x] `https://dog.ceo/api/breeds/image/random/9`
- The action creator should dispatch an action to the reducer with a payload of all the dogs it got from the API
- [x] Try and hook it up, note any errors
- [x] Install `redux-thunk` and apply as middleware
- [x] Bask in the glory of error free redux flow!

## Add testing
- [x] Test Provider
- [x] Reducer
- [x] Action creators
