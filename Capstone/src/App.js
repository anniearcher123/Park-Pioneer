import React, { useEffect } from 'react';
import ParksList from './containers/parks-list';
import './App.css';
import Header from './containers/header-component';
import ParkPage from './containers/park-page'


function App() {
  const fetchParksList = async () => {
    const response = await fetch("https://developer.nps.gov/api/v1/parks?&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm")
    const data = await response.json();
    console.log(data)
  }
  useEffect(() => {
    fetchParksList();
  }, [])
  return (
    // <div>
    //   <Header />
    //   <h3>Find your next National Park Adventure Below:</h3>

    // </div>
<div>
  <ParkPage />
</div>
);
}

export default App;
