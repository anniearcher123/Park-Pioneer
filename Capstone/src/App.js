import React, {useState} from 'react';
import './App.css';
import Home from './containers/home-page'
import Login from './containers/login';
import MyCalendar from './containers/calendar';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { AppContext} from "./context/context";
import 'bootstrap/dist/css/bootstrap.min.css';
import ParkPage from './containers/park-page';


function App() {
  
  const [Events, SetEvents] = useState([
      {
          title: "Test",
          start: new Date(2022, 11, 1, 1, 0, 0),
          end: new Date(2022, 11, 1, 10, 3,0)
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
  ])
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(Events);
  const [nationalParkList, setNationalParkList] = useState([]);
  const [selectedPark, setSelectedPark] = useState([]);
  const [activitiesList, setActivitiesList] = useState();


  return (
    <AppContext.Provider value={{Events, SetEvents, isLoggedIn, SetIsLoggedIn, newEvent, setNewEvent, allEvents, setAllEvents, nationalParkList, setNationalParkList, selectedPark, setSelectedPark, activitiesList, setActivitiesList}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calendar" element={<MyCalendar/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="parks/:parkName" element={<ParkPage />}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
