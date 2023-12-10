import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import doggosReducer from './reducers/doggoReducer'
const store = createStore(doggosReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
