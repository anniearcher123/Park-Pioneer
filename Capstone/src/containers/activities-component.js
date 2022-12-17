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
            <div className="info-section">
                <h3 className="info-title">Activities</h3>
                <Accordion className="accordion-section">
                    {activityList.map((activity, index) => {
                        return(

                    <Accordion.Item eventKey={index} className="col-12">
                        <Accordion.Header>{activity.title}</Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            <img className="row activity-image" src={activity.images[0].url} ></img>
                            <div className="row">{activity.shortDescription}</div>
                            <br/>
                            <div className="row"><a className="accordion-link " href={activity.url}>More Info</a></div>
                            <div className="row"><button type="button" id="accordion-button" className="btn btn-dark">Add to Calendar</button></div>
                        </Accordion.Body>
                    </Accordion.Item>
                        )
                    
                    })}
                    </Accordion>
            </div>

        )
    }

export default Activities;