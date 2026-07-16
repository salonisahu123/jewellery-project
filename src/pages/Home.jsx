import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/slider/HeroSlider';
import NewArrival from '../components/Arrivals/NewArrival';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />
       {/* <Collections />
                <TrendingNow />
                <JwelleryWorld/> */}
      <NewArrival/>
      
    </div>
  );
}

export default Home;
