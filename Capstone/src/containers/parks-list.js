import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/context';


const ParksList = () => {
    //useEffect(() => {
    //     (async () => {
    //       const results = await fetch('https://developer.nps.gov/api/v1/parks?&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
    //       const data = await results.json();
    //       parksList.push(data.data)
    //       console.log(parksList);
    //     })();
    //   }, []);

    const [nationalParkList, setNationalParkList] = useState(AppContext);
    
    useEffect(() => {
            fetch('https://developer.nps.gov/api/v1/parks?parkCode=&limit=449&sort=&api_key=8vJFyAsrGu6yLrJbygM2i5KDd5SNmyQNri1phITm')
            .then((results) => results.json())
            .then((data) => {
                console.log(data)
                if(data.data.length > 0) {
                    console.log("here");
                    let parkList = data.data.filter((park) => {
                        if(park.designation == "National Park") {
                            return park
                        }
                    })

                    setNationalParkList(parkList);
                }
            });
        
    }, []);




    if(nationalParkList.length > 0)
        return(
            <div>
                {nationalParkList.map((park) => {
                    return(
                        <div className="parks-list">
                            <h6><Link to={`parks/${park.fullName}`}>{park.fullName}</Link></h6>
                        </div>
                    )
                })}
            </div>
        )
    else
        return null;
    }

export default ParksList;