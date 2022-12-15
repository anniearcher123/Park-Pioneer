import React, { useState } from "react";
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
import SocialFollow from "./SocialFollow";

function App() {
  const { parkName } = useParams();
  const [Events, SetEvents] = useState([
    {
      title: "Test",
      start: new Date(2022, 11, 1, 1, 0, 0),
      end: new Date(2022, 11, 1, 10, 3, 0),
    },
    {
      title: "Vacation",
      start: new Date(2022, 6, 7),
      end: new Date(2022, 6, 10),
    },
    {
      title: "Conference",
      start: new Date(2022, 6, 20),
      end: new Date(2022, 6, 23),
    },
  ]);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(Events);
  const [nationalParkList, setNationalParkList] = useState([]);
  const [selectedPark, setSelectedPark] = useState([]);
  const [activitiesList, setActivitiesList] = useState();


  return (
    <AppContext.Provider value={{Events, SetEvents, isLoggedIn, SetIsLoggedIn, newEvent, setNewEvent, allEvents, setAllEvents, nationalParkList, setNationalParkList, selectedPark, setSelectedPark}}>
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
