import React from "react";
import './index.scss';
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
  const lengthItem: any = useSelector((state: any ) => state.cart.lengthItem)
  const sumValue:any = useSelector((state:any) => state.cart.totalAmount)
  return (
    <div className="cart">
      <div>
        <h3>Order summary</h3>
        <span>Total Items: {lengthItem} </span>
        <span>Sum : {sumValue |  0}</span>
      </div>
    </div>
  )
}
export default Cart