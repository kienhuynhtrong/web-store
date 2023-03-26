import React from "react";
import './home.scss'
import {ShoesList} from '../../interface/type'

interface IProps {
  Shoes : ShoesList
}
const Home:React.FC<IProps> = ({Shoes}) => {
  return (
    <div className="home">
      <div className="home_banner"></div>
      <div className="home_slogan">JUST DO IT</div>
      <div className="home_description">
      Nike has been your companion in happiness, both big and small, for over 50 years. Our roots are firmly grounded in Pakistan and with its people.
      </div>
      <div className="home__wrap-images">
        { Object.keys(Shoes).map((item) => {
          let data = Shoes[item]
          return (
            <div key={item} className="home__wrap-items">
              <img
                src={data.img}
                alt="Home"
              ></img>
              <div className="home__items-name">{data.name}</div>
              <div className="home__items-price">{data.price +'$'}</div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
};
export default Home;
