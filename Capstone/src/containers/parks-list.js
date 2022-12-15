import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext} from "../context/context";



const ParksList = () => {
    const {nationalParkList, setNationalParkList} = useContext(AppContext);
    const {selectedPark, setSelectedPark} = useContext(AppContext)


    useEffect(() => {
            fetch('https://developer.nps.gov/api/v1/parks?parkCode=&limit=449&sort=&api_key=cHVc4fkkvOJ7JGO1h6SPHajDtt9NSmef3cH9oBwH')
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
                    let sortedParkList = parkList.sort();
                    setNationalParkList(sortedParkList);
                }
            });
        
    }, []);

function filterPark(thiscode) {
    let singlePark = nationalParkList.filter((park) => {
        if(park.parkCode === thiscode) {
            return park
        }

    })
    setSelectedPark(singlePark[0]);
    console.log("Selected Park:", singlePark);
}


    if(nationalParkList.length > 0)
        return(
            <div>
                {nationalParkList.map((park) => {
                    return(
                        <div className="parks-list">
                            <h6><NavLink to={`parks/${park.fullName}`} onClick={() => filterPark(park.parkCode)}>{park.fullName}</NavLink></h6>
                        </div>
                    )
                })}
            </div>
        )
    else
        return null;
    }

export default ParksList;