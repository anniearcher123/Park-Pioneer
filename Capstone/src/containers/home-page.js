import React, {useState} from "react";
import Header from "./header-component";
import ParksList from "./parks-list";



const Home = () => {

    return(
        <div>
            <Header />
            <h1>Pick a National Park to get started:</h1>
            <ParksList />
        </div>
    )
}

export default Home;