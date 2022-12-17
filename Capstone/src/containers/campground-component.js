import React, { useEffect, useContext, useState } from "react";
import { AppContext} from "../context/context";
import Accordion from 'react-bootstrap/Accordion';

const Campground = () => {

const {selectedPark} = useContext(AppContext)
const [campgroundsList, setCampgroundList] = useState([]);
let parkCode = selectedPark.parkCode

useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/campgrounds?parkcode=${parkCode}&api_key=oivfus5fZRuuPB8uAwpkRKCLKZoI9pqStIuaky4v`)
.then((results) => results.json())
.then((data) => {
    let campgroundList = data.data;
    console.log("Campgrounds:",data);
    setCampgroundList(campgroundList)

});
}, []);

    return(
        <div className="info-section">
            <h3 className="info-title bg-dark">Campgrounds</h3>
            <Accordion>
                    {campgroundsList.map((campground, index) => {
                        return(

                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{campground.name}</Accordion.Header>
                        <Accordion.Body>
                            <div className="campground-body">
                            <img className="activity-image" src={campground.images[0]?.url} ></img>
                            <h3>Amenities:</h3>
                                <p>Campstore: {campground.amenities.campStore}</p>
                                <p>Dump Station: {campground.amenities.dumpStation}</p>
                                <p>Food Storage Lockers: {campground.amenities.foodStorageLockers}</p>
                                <p>Potable Water: {campground.amenities.potableWater[0]}</p>
                                <p>Showers: {campground.amenities.showers[0]}</p>
                                <p>Toilets: {campground.amenities.toilets[0]}</p>
                            <h3>Campsites:</h3>
                                <p>Rv-Only Sites: {campground.campsites.rvOnly}</p>
                                <p>Tent-Only Sites: {campground.campsites.tentOnly}</p>
                                <p>Total Sites: {campground.campsites.totalSites}</p>
                                <a className="accordion-link" href={campground.url}>More Info</a>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                        )
                    
                    })}
                    </Accordion>
        </div>
    )
}

export default Campground;