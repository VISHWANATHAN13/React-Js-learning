import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const user = useSelector((state) => state.userInfo.user)

    return (
        <nav>
            <h1>React Ep-16</h1>

            <ul>
                {!user && (
                <Link to="/login">
                    <li>Login</li>
                </Link>
                ) 
                }
                {user && (
                    <>
                        <Link to="settings">
                            <li>Settings</li>
                        </Link>
                        <Link>
                            <li>Logout</li>
                        </Link>
                    </>
                )}

            </ul>
        </nav>
    );
}

export default Navbar