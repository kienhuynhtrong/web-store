import React, {useEffect} from "react";
import './products.scss'
import { useDispatch, useSelector } from "react-redux";
import {getProducts, ADD_TO_CART} from '../../actions/index'
import {ITemProducts} from '../../interface/type'

const Products = () => {
  const dispatch:any = useDispatch()
  const listProducts: any = useSelector((state:any) => state.products.products)
  useEffect(() => {
    dispatch(getProducts)
  }, [])
  const handleAddTocart = (item: any) => {
    dispatch(ADD_TO_CART(item))
  }
  return (
    <div className="product">
      {
        listProducts.map((item:ITemProducts, index:number) => {
          return (
            <div key={index} className="product__item">
              <h3 className="product__title">{item.title}</h3>
              <p className="product__price">${item.price}</p>
              <img
                src={item.image}
                alt={item.category}
              />
            <div>
              <button
              className="product__add-to-cart"
              onClick={() => handleAddTocart(item)}
              >Add to Cart</button>
            </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Products