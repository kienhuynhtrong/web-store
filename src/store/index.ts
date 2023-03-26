import { combineReducers } from 'redux';
import getListProducts from './reducer/products'
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import cartReducer from './reducer/cart';

const storeTotal = combineReducers({
  products: getListProducts,
  cart: cartReducer,
})
let store = createStore(storeTotal, applyMiddleware(thunkMiddleware))
export default store;