import React, { useEffect, useState } from 'react';
import ParkHeader from './park-page-header';
import Amenities from './amenities-component';
import Activities from './activities-component';
import Campground from './campground-component';
import { AppContext } from '../context/context';


const ParkPage = () => {

    const {selectedPark} = useContext(AppContext)


    return(
        <div>
            <ParkHeader />
            <div className="container" id="info-section">
                <div className="row">
                    <div className="col-sm" id="amenities-section">
                        <Amenities />
                    </div>
                    <div className="col-sm" id="campground-section">
                        <Campground />
                    </div>
                    <div className="col-sm" id="activities-section">
                        <Activities />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParkPage;