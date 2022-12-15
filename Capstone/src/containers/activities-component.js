import React, { useEffect, useContext } from "react";
import { AppContext} from "../context/context";


const Activities = () => {

const {selectedPark} = useContext(AppContext)
// const {activitiesList, setActivitiesList} = useContext(AppContext)
let parkCode = selectedPark.parkCode
let activitiesList = [];
console.log("Park Code:", parkCode)
//Need to make api call to thingstodo endpoint

useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/thingstodo?parkcode=${parkCode}&limit=87&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm`)
    .then((results) => results.json())
    .then((data) => {
        console.log("Activities:",data);
       
    });
}, []);

// setActivitiesList(tempList)
    if(activitiesList == undefined) {
        return(
            <div>
                <h3>Activities</h3>
                <ul>
                    {activitiesList.map((activity) => {
                        return(
                            <li>
                                <h3>{activity.title}</h3>
                                <p>{activity.activityDescription}</p>
                                <a href={activity.url}>More Info</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    else {
        return(
            <div>
                <h3>Activities</h3>
            </div>
        ) 
    }
}

export default Activities;