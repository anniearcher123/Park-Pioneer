import React, { useState } from "react";
import Header from "./header-component";
import Footer from "./footer-component";
import ParksList from "./parks-list";

const Home = () => {
  //   const [query, setQuery] = useState("");
  //   const [images, setImages] = useState([]); // declare state variable "images" to an empty array and "setImages" method to update images state

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     fetch(`https://pixabay.com/api/?key=[api-key]&q=${query}`) // fetch to API by passing in query state
  //       .then((response) => response.json())
  //       .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL)) // use object destructuring to grab image urls from json response
  //       .then(setImages); // call setImages to update images state with image urls
  //   };

  return (
    <div>
      <Header />
      <Footer />
      {/* <h1>Image Slider</h1> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Search" />
      </form> */}
      <ParksList />
    </div>
  );
};

export default Home;
