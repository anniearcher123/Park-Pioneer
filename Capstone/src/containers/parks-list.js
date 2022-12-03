import React, { useEffect, useState } from 'react';


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
            fetch('https://developer.nps.gov/api/v1/parks?&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
            .then((results) => results.json())
            .then((data) => setParksList(data.data));
        
        console.log(parksList);
    }, []);

    if(parksList.length > 0)
        return(
            <div>
                {parksList.map((park) => {
                    return(
                        <div className="parks-list">
                            <h6>{park.fullName}</h6>
                        </div>
                    )
                })}
            </div>
        )
    else
        return null;
    }

export default ParksList;