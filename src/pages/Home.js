import React from 'react';
import Banner from '../components/Banner/Banner';
import BookContainerHome from '../components/bookShelft/BookContainerHome';
import SeemoreContainer from '../components/bookShelft/SeemoreContainer';

function Home() {
  return (
    <div className="homePage">
      <Banner />
      <div className="bookShelft">
        <SeemoreContainer />
        <BookContainerHome />
      </div>
    </div>
  );
}

export default Home;
