import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/context";
import Carousel from 'react-bootstrap/Carousel';
import TreeIcon from "../images/icons8-trees-50.png"


const ParkHeader = () => {
    const { isLoggedIn, SetIsLoggedIn } = useContext(AppContext);
    
    function logout() {
        SetIsLoggedIn(false);
    }

    const {selectedPark} = useContext(AppContext)
    console.log(selectedPark)


        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark home-header">
        <img className="logo" src={TreeIcon}></img>
        <a className="navbar-brand">Park Pioneer</a>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item ">
            <NavLink className="nav-link" to="/">
                Home
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/calendar">
                My Calendar
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/discover">
                Live Feeds
            </NavLink>
            </li>
            {isLoggedIn ? 
            <li className="nav-item">
            <NavLink className="nav-link" onClick={logout} >
                Logout
            </NavLink>
            </li> : null}
        </ul>
        </div>
        </nav>
                <div className="jumbotron">
                <Carousel >
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