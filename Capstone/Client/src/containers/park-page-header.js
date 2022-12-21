import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/context";
import Carousel from 'react-bootstrap/Carousel';
import TreeIcon from "../images/icons8-trees-50.png"
import Weather from './weather-component';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const ParkHeader = () => {
    const { isLoggedIn, SetIsLoggedIn } = useContext(AppContext);
    
    function logout() {
        SetIsLoggedIn(false);
    }

    const {selectedPark} = useContext(AppContext)
    console.log(selectedPark)


        return(
            <div>
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container className="nav-container">
            <Navbar.Brand to="/" className="park-pioneer">
            <img className="logo" src={TreeIcon}></img>
                Park Pioneer
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-link" to="/calendar">
                    My Calendar
                </NavLink>
                <NavLink className="nav-link" to="/discover">
                    Live Feeds
                </NavLink>
                {isLoggedIn ? 
                <div>
                <NavLink className="nav-link" onClick={logout} >
                    Logout
                </NavLink>
                </div> : null}
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
                <div className="jumbotron">
                <Carousel >
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[0].url} alt="First slide" />
                        <Carousel.Caption>
                            <Weather />
                        <h1>{selectedPark?.fullName}</h1>
                        <p className="park-description">{selectedPark?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[1].url} alt="Second slide" />
                        <Carousel.Caption>
                        <Weather />
                        <h1>{selectedPark?.fullName}</h1>
                        <p>{selectedPark?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[2].url} alt="Third slide" />
                        <Carousel.Caption>
                        <Weather />
                        <h1>{selectedPark?.fullName}</h1>
                        <p>{selectedPark?.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="park-image" className="d-block w-100" src={selectedPark.images[3].url} alt="Third slide" />
                        <Carousel.Caption>
                        <Weather />
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