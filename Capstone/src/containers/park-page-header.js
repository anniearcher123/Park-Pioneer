import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/context";
import Carousel from 'react-bootstrap/Carousel';


const ParkHeader = () => {
    const { isLoggedIn, SetIsLoggedIn } = useContext(AppContext);
    
    function logout() {
        SetIsLoggedIn(false);
    }

    const {selectedPark} = useContext(AppContext)
    console.log(selectedPark)


        return(
            <div>
                <div className="home-header">
                    <h2>Park Pioneer</h2>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">My Calendar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/discover">Live Feeds</NavLink>
                        </li>
                        {isLoggedIn ? 
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={logout} >
                            Logout
                            </NavLink>
                        </li> : null}
                    </ul>
                </div>
                <div className="jumbotron">
                <Carousel>
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[0].url} alt="First slide" />
                        <Carousel.Caption>
                        <h1>{selectedPark?.fullName}</h1>
                        <p>{selectedPark?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[1].url} alt="Second slide" />
                        <Carousel.Caption>
                        <h1>{selectedPark?.fullName}</h1>
                        <p>{selectedPark?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[2].url} alt="Third slide" />
                        <Carousel.Caption>
                        <h1>{selectedPark?.fullName}</h1>
                        <p>{selectedPark?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[3].url} alt="Third slide" />
                        <Carousel.Caption>
                        <h1>{selectedPark?.fullName}</h1>
                        <p>{selectedPark?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>                
            </div>  
        )
        
    }

export default ParkHeader;