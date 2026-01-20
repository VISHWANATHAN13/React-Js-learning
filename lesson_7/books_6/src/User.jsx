import React, { useContext } from 'react'
import Users from './users'
import { ThemeContext } from './App';

const User = () => {

    const { theme } = useContext(ThemeContext);
    console.log({theme});


    const textStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    };

    return (
        <div>
            <h1 style={textStyle}>User</h1>
        </div>
    )
}

export default User