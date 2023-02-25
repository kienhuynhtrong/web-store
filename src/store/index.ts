import { combineReducers } from 'redux';
import getListProducts from './reducer/products'
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
const storeTotal = combineReducers({
  products: getListProducts
})
let store = createStore(storeTotal, applyMiddleware(thunkMiddleware))
export default store;