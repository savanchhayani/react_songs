import React from "react";
import CarouselTop from '../components/CarouselTop';
import Recommended from '../components/Recommended';
import BottomView from '../components/BottomView';

class Home extends React.Component {
  render() {
    return (
      <div className='home-page'>
        <CarouselTop />
        <Recommended />
        <BottomView />
      </div>
    );
  }
}

export default Home;
