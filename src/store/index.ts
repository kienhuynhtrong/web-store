import { combineReducers } from 'redux';
import getListProducts from './reducer/products'

const storeTotal = combineReducers({
  products: getListProducts
})