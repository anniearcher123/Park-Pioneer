import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./containers/header-component";
import Login from "./containers/login";
import Footer from "./containers/footer-component";

function App() {
  return (
    <Footer />

    //     <BrowserRouter>
    //       <Routes>
    //         <Header />
    // <Route path="/src/containers/footer-component" element={<Footer />} />
    //         <Route path="/src/containers/login" element={<Login />} />
    //       </Routes>
    //     </BrowserRouter>
  );
}

export default App;
