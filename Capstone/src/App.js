import React, { useEffect } from 'react';
import ParksList from './containers/parks-list';
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/header-component";
import Login from "./containers/login";

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
    <div>
      <Header />
      <h3>Find your next National Park Adventure Below:</h3>
      <ParksList />
    <BrowserRouter>
      <Routes>
        <Header />
        <Route path="/src/containers/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
