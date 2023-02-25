import axios from 'axios'
import { Dispatch, Action } from "redux"
export function GET_ALL_PRODUCT(data:any){
  return {
      type:'GET_ALL_PRODUCT',
      data
  }
}

export async function getProducts(dispatch: Dispatch<Action>) {
  return await fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(item => dispatch(GET_ALL_PRODUCT(item)))
}