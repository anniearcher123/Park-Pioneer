import React, { useEffect, useContext, useState } from "react";
import { AppContext} from "../context/context";
import ListGroup from 'react-bootstrap/ListGroup';

const Amenities = () => {

    const {selectedPark} = useContext(AppContext)
    const [amenitiesList, setAmenityList] = useState([]);
    let parkCode = selectedPark.parkCode
    

    useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/amenities?parkcode=${parkCode}&api_key=oivfus5fZRuuPB8uAwpkRKCLKZoI9pqStIuaky4v`)
    .then((results) => results.json())
    .then((data) => {
        let amenityList = data.data;
        console.log("Amenities:",data);
        setAmenityList(amenityList)
    
    });
    }, []);

    return(
        <div className="info-section">
            <h3 className="info-title">Park Amenities</h3>
            <ListGroup className="list-group-section">
                {amenitiesList.map((amenity) => {
                    return(
                        <ListGroup.Item>{amenity.name}</ListGroup.Item>
                    )
                })}
            </ListGroup>

        </div>
    )
}

export default Amenities;