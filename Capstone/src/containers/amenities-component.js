import React, { useEffect, useState } from "react";

const Amenities = () => {



//     useEffect(() => {
//         fetch('https://developer.nps.gov/api/v1/amenities/parksplaces?parkCode=acad&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
//         .then((results) => results.json())
//         .then((data) => {
//             console.log("Amenities:", data);
//         });
    
// }, []);

    return(
        <div className="amenities">
            <h3>Amenities</h3>
            <ul>
                <li>Accessibility: Accessible Restroom</li>
            </ul>
        </div>
    )
}

export default Amenities;