import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./containers/home-page";
import Login from "./containers/login";
import Register from "./containers/register";
import LiveFeed from "./containers/live-feed";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { AppContext } from "./context/context";
import "bootstrap/dist/css/bootstrap.min.css";
import ParkPage from "./containers/park-page";
import CalendarPage from "./containers/calendar-page";


function App() {
  const { parkName } = useParams();
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [nationalParkList, setNationalParkList] = useState([]);
  const [selectedPark, setSelectedPark] = useState([]);
  const [activitiesList, setActivitiesList] = useState();
  const [username, setUsername] = useState(undefined);

  // useEffect(() => {
  //   if(username){
  //     fetch('http://localhost:4000/', { 
  //           method: 'PUT',
  //           headers: {'Content-Type':'application/json'},
  //           body: JSON.stringify({
  //             username: username,
  //             events: allEvents})
  //     })
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((body) => {
  //       alert(body.message)
  //     })
  //   }
  // },[allEvents])
  

  return (
    <AppContext.Provider value={{isLoggedIn, SetIsLoggedIn, newEvent, setNewEvent, allEvents, setAllEvents, nationalParkList, setNationalParkList, selectedPark, setSelectedPark, username, setUsername}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="parks/:parkName" element={<ParkPage />} />
          <Route path="/discover" element={<LiveFeed />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
