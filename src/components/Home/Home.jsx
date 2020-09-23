import React from "react";
import "./home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home_background"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
        alt=""
      />

      <Product
        id="123123123"
        title="DualShock 4 Wireless Controller for PlayStation 4"
        price={65}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SX522_.jpg"
        Quantity={2}
      />

      <Product
        id="123123124"
        title="Oculus Quest All-in-one VR Gaming Headset – 128GB"
        price={640}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/71D9OsZmWxL._SX522_.jpg"
        Quantity={4}
      />

      <Product
        id="12312315593"
        title="Oculus Quest In-Ear Headphones"
        price={89}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/611ia827mjL._SY445_.jpg"
        Quantity={10}
      />

      <Product
        id="123128685593"
        title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller"
        price={30}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SY355_.jpg"
        Quantity={7}
      />
    </div>
  );
};

export default Home;
