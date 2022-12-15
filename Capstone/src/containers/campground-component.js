import React, { useEffect, useContext, useState } from "react";
import { AppContext} from "../context/context";

const Campground = () => {

const {selectedPark} = useContext(AppContext)
const [campgroundsList, setCampgroundList] = useState([]);
let parkCode = selectedPark.parkCode
//need to make api call to campground endpoint

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
        <div>
            <h3>Popular Campground Info</h3>
            <div className="accordion" id="accordionExample">
    {campgroundsList.map((campground) => {
        return(
            <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {campground.name}
        </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <ul className="camp-list">
            <li className="camp-items">
                <img className="camp-image" src={campground.images[0].url}></img>
                <h3>Amenities:</h3>
                <p>{campground.amenities.campStore}</p>
                <p>{campground.amenities.dumpStation}</p>
                <p>{campground.amenities.foodStorageLockers}</p>
                <p>{campground.amenities.potableWater[0]}</p>
                <p>{campground.amenities.showers[0]}</p>
                <p>{campground.amenities.toilets[0]}</p>
                <h3>Campsites:</h3>
                <p>{campground.campsites.rvOnly}</p>
                <p>{campground.campsites.tentOnly}</p>
                <p>{campground.campsites.totalSites}</p>
            </li>
            <li><a href={campground.url}>More Info</a></li>
        </ul>
      </div>
    </div>
  </div>
        )
    })}
</div>
        </div>
    )
}

export default Campground;