import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("API call");
    navigate("/about");
  };

  return (
    <div className="navbar"> {/* <-- Added className */}
      <h1>List</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li onClick={handleClick}>About</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
