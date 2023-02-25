import React, {useEffect} from "react";
import './products.scss'
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../../actions/index'
const Products = () => {
  const dispatch:any = useDispatch()
  const listProducts: any = useSelector((state:any) => state.products.products)
  useEffect(() => {
    dispatch(getProducts)
  }, [])
  console.log(listProducts)
  return (
    <div className="product">
      <h3>Test</h3>
    </div>
  )
}
export default Products