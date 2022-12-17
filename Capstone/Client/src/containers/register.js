import React, {useContext, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";

export default function Register (props) {
  const {isLoggedIn, SetIsLoggedIn} = useContext(AppContext);
  const navigate = useNavigate()
  const [addUser, setAddUser] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    if (addUser.password === addUser.verify){
        fetch('/register', { 
            method: 'POST',
            data: {
            firstName: addUser.firstName,
            lastName: addUser.lastName,
            email: addUser.email,
            password: addUser.password
            }
        })
    
        .then((response) => {
            return response.json()
          }).then((body) => {
            console.log(body);
          })
        
        navigate("/login")
    }
    else {
        alert('Password does not match')
    }

    
}

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
                <label>First Name</label>
                <input 
                type="text" 
                required 
                className="form-control mt-1" 
                placeholder="Enter First Name" 
                value={addUser.firstName} 
                onChange={(e) => setAddUser({ ...addUser, firstName: e.target.value })}
                />
            </div>

            <div className="form-group mt-3">
                <label>Last Name</label>
                <input 
                type="text" 
                required 
                className="form-control mt-1" 
                placeholder="Enter Last Name" 
                value={addUser.lastName} 
                onChange={(e) => setAddUser({ ...addUser, lastName: e.target.value })}
                />
            </div>

            <div className="form-group mt-3">
                <label>Email Address</label>
                <input
                type="email"
                required
                className="form-control mt-1"
                placeholder="Enter email"
                value={addUser.email} 
                onChange={(e) => setAddUser({ ...addUser, email: e.target.value })}
                />
            </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
                type="password"
                required
                className="form-control mt-1"
                placeholder="Enter password"
                value={addUser.password} 
                onChange={(e) => setAddUser({ ...addUser, password: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Verify Password</label>
            <input
                type="password"
                required
                className="form-control mt-1"
                placeholder="Enter password"
                value={addUser.verify} 
                onChange={(e) => setAddUser({ ...addUser, verify: e.target.value })}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Already have and account? <NavLink to="/login">Sign in here</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};