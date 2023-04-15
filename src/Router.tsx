import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from './component/Home/Home'
import Nav from './component/Nav/Nav'
import Shoes from './mockApi/latestShoes.json'
import Products from "./component/Products/Products";
import Cart from './component/Cart/Cart'

const RouterFunction = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home Shoes={Shoes} />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default RouterFunction;
