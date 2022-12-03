import React, {useState} from 'react';
import './App.css';
import Home from './containers/home-page'
import MyCalendar from './containers/calendar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext} from "./context/context";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [Events, SetEvents] = useState([])
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{Events, SetEvents, isLoggedIn, SetIsLoggedIn}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calendar" element={<MyCalendar/>} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
