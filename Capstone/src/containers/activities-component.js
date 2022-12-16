import React, { useEffect, useContext, useState } from "react";
import { AppContext} from "../context/context";
import Accordion from 'react-bootstrap/Accordion';

const Activities = () => {

const {selectedPark} = useContext(AppContext)

const [activityList, setActivityList] = useState([])
let parkCode = selectedPark.parkCode
console.log("Park Code:", parkCode)
//Need to make api call to thingstodo endpoint

useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/thingstodo?parkcode=${parkCode}&limit=87&api_key=cHVc4fkkvOJ7JGO1h6SPHajDtt9NSmef3cH9oBwH`)
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
                <Accordion>
                    {activityList.map((activity, index) => {
                        return(

                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{activity.title}</Accordion.Header>
                        <Accordion.Body>
                            <img className="activity-image" src={activity.images[0].url} ></img>
                            {activity.shortDescription}
                            <br/>
                            <a href={activity.url}>More Info</a>
                            <button>Add to Calendar</button>
                        </Accordion.Body>
                    </Accordion.Item>
                        )
                    
                    })}
                    </Accordion>
            </div>

        )
    }

export default Activities;