import React, { useEffect } from "react";



const Activities = () => {

//Need to make api call to thingstodo endpoint

// useEffect(() => {
//     fetch('https://developer.nps.gov/api/v1/thingstodo?parkCode=acad&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
//     .then((results) => results.json())
//     .then((data) => {
//         console.log("Activities:",data);
//     });

// }, []);

    return(
        <div>
            <h3>Activities</h3>
            <ul>
                <li>Guided Tours</li>
                <li>Living History</li>
                <li>Park Film</li>
            </ul>
        </div>
    )
}

export default Activities;