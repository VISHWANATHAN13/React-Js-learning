import React from 'react'
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleClick=()=>{

        // API call
        console.log("API call");
        
        navigate("/about");

    }


    return (
        <div>
            <h1>List</h1>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/users"}>Users</Link>
                {/* <Link to={"/about"}>About</Link> */}
                <li onClick={handleClick}>About</li>
                <Link to={"/contact"}>Contact</Link>
            </ul>
        </div>
    )
}

export default Navbar;