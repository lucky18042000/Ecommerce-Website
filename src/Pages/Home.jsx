import React,{useState,useEffect} from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Cards from "../Components/Cards";
import data from "./data";



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3f7fb41c9amsh15ce7cb2af9827bp1e5041jsn2ddf53c2094b',
    'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com',
  },
};

function Home() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(
      'https://unofficial-shein.p.rapidapi.com/products/list?cat_id=1980&adp=10170797&language=en&country=US&currency=USD&sort=7&limit=20&page=1',
      options
    )
      .then((res) => res.json())
      .then((response) => {
        setCards(response.info.products);
      })
      .catch((err) => console.error(err));
  }, []);
  
  const cardlist = cards.map((item) => {
    return <Cards key={item.goods_id} {...item} />;
  });
console.log(cards)
  return (
    <div className="home">
      <Navbar active={false} />
      <Hero />
      <div className="cards-main justify-center">{cardlist}</div>
      <Footer />
    </div>
  );
}

export default Home;
