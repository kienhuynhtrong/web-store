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
      <div>
        { Object.keys(Shoes).map((item) => {
          let data = Shoes[item]
          return (
            <div key={item}>
              <img
                src={data.img}
                alt="Home"
              ></img>
              {data.name}
              {data.price}
            </div>
          )
        })
        }
      </div>
    </div>
  );
};
export default Home;
