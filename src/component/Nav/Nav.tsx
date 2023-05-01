import React from 'react'
import NikeImage from '../../images/nike.svg'
import { NavLink } from 'react-router-dom';
import './index.scss'
import { useSelector } from 'react-redux';


const Nav = () => {
  const lengthItem :any = useSelector((state:any) => state.cart.lengthItem)
  return (
    <div className='nav'>
      <h3 className='nav_title'>Nikes Shoes</h3>
      <nav>
        <div className='nav_bar'>
          <img
          src={NikeImage}
          alt="logo"
          className='nav_logo'
          ></img>
          <div className='nav_list-item'>
            <ul>
              <li
              className='nav_item'
              >
                <NavLink
                to="/"
                >
                  Home
                </NavLink>
              </li>
              <li
              className='nav_item'
              >
                <NavLink
                to="/abouts"
                >
                  Abouts
                </NavLink>
              </li>
              <li
              className='nav_item'
              >
                <NavLink
                to="/products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <div>
              <NavLink
              to="/cart"
              >
              Item {lengthItem}
              </NavLink>
              </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Nav