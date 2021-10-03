import React from 'react';
import Banner from '../components/Banner/Banner';
import BookContainer from '../components/bookShelft/BookContainer';
import SeemoreContainer from '../components/bookShelft/SeemoreContainer';

function Home() {
  return (
    <div className="homePage">
      <Banner />
      <div className="bookShelft">
        <SeemoreContainer />
        <BookContainer />
      </div>
    </div>
  );
}

export default Home;
