import React from "react";
import CarouselTop from '../components/CarouselTop';
import Recommended from '../components/Recommended';

class Home extends React.Component {
  render() {
    return (
      <div className='home-page'>
        <CarouselTop />
        <Recommended />
      </div>
    );
  }
}

export default Home;
