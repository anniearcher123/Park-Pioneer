import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const ParksList = () => {
    let [parksList, setParksList] = useState([]);
    //useEffect(() => {
    //     (async () => {
    //       const results = await fetch('https://developer.nps.gov/api/v1/parks?&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
    //       const data = await results.json();
    //       parksList.push(data.data)
    //       console.log(parksList);
    //     })();
    //   }, []);

    useEffect(() => {
            fetch('https://developer.nps.gov/api/v1/parks?parkCode=&limit=449&sort=&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
            .then((results) => results.json())
            .then((data) => setParksList(data.data));
        
        console.log(parksList);
    }, []);

    let nationalParksList = parksList.filter((park) => {
        if(park.designation == "National Park") {
            return park
        }
    })
    console.log("Parks List", nationalParksList)



    if(nationalParksList.length > 0)
        return(
            <div>
                {nationalParksList.map((park) => {
                    return(
                        <div className="parks-list">
                            <h6><Link to="/{park.fullName}">{park.fullName}</Link></h6>
                        </div>
                    )
                })}
            </div>
        )
    else
        return null;
    }

export default ParksList;