import React from 'react';
import HoreSlider from "../components/slider/HoreSlider"
import Collections from "../components/Collections/Collections"

import TrendingNow from "../components/Trending/TrendingNow"
import JwelleryWorld from "../components/JewelleryWorld/JewelleryWorld"
import Features from "../components/Features"
import NewArrival from '../components/Arrivals/NewArrival';


const Home = () => {
  return (
    <div>
      <HoreSlider/>
      <Collections/>
       <TrendingNow />
      <JwelleryWorld/>
      <Features/>
      <NewArrival/>

    </div>
  );
}

export default Home;
