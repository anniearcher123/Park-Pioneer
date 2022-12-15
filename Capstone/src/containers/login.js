import React, {useContext, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";

export default function Login (props) {
  const {isLoggedIn, SetIsLoggedIn} = useContext(AppContext);
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState([])
  
  function login(){
    console.log(currentUser)
    SetIsLoggedIn(true)
    navigate("/")
  }
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={login}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input 
            type="email" 
            required 
            className="form-control mt-1" 
            placeholder="Enter Email" 
            value={currentUser.email} 
            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
            />
            
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input 
            type="password" 
            required 
            className="form-control mt-1" 
            placeholder="Enter Password" 
            value={currentUser.password} 
            onChange={(e) => setCurrentUser({...currentUser, password: e.target.value })}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <p className="forgot-password text-right mt-2 mx-2">
              <NavLink to="/register">Register</NavLink>
            </p>
            <p className="forgot-password text-right mt-2">
              <NavLink to="/">Home</NavLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};


