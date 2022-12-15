import React, { useEffect, useContext, useState } from "react";
import { AppContext} from "../context/context";


const Activities = () => {

const {selectedPark} = useContext(AppContext)

const [activityList, setActivityList] = useState([])
let parkCode = selectedPark.parkCode
console.log("Park Code:", parkCode)
//Need to make api call to thingstodo endpoint

useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/thingstodo?parkcode=${parkCode}&limit=87&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm`)
    .then((results) => results.json())
    .then((data) => {
        let activitiesList = data.data
        console.log("Activities:",data);
        setActivityList(activitiesList);
        console.log("Activity List: ", activityList)
    });
}, []);

        return(
            <div>
                <h3>Activities</h3>
                <ul>
                    {activityList.map((activity) => {
                        return(
                            <li>
                                <h3>{activity.title}</h3>
                                <p>{activity.shortDescription}</p>
                                <a href={activity.url}>More Info</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

export default Activities;