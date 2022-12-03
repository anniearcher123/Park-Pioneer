import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./containers/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/src/containers/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
