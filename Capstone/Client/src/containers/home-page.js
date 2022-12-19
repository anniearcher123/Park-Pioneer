import React, { useState } from "react";
import Header from "./header-component";
import Footer from "./footer-component";
import ParksList from "./parks-list";

const Home = () => {

  return (
    <div>
      <Header />
      <h1 className="park-list-header">Explore A National Park: </h1>
      <ParksList />
      <Footer />
    </div>
  );
};

export default Home;
