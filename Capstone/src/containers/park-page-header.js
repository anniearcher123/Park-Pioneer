import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/context";


const ParkHeader = () => {
    const { isLoggedIn, SetIsLoggedIn } = useContext(AppContext);
    
    function logout() {
        SetIsLoggedIn(false);
    }

        return(
            <div>
                <div className="home-header">
                    <h2>Park Planner</h2>
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
                    <h1 className="display-4">Acadia National Park</h1>
                    <p className="lead">Acadia National Park Description</p>
                    <p className="lead">Find information about activities, campsites, and more below.</p>
                </div>
                
            </div>
        )
        
    }

export default ParkHeader;