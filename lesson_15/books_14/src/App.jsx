import React from 'react'
import axios from './axios';
import { useEffect } from 'react';

const App = () => {

  // async function apiResponse() {
    
  //   const response = await fetch("https://official-joke-api.appspot.com/random_joke");

  //   const data = await response.json();

  //   console.log(data);
    

  // // }

  async function apiResponse() {

    const response = await axios.get("/random_joke");

    console.log(response.data);
    
    
  }

  useEffect(()=>{
    apiResponse();
  },[])

  return (

    <div>
      <h1>Joke API</h1>
      <button onClick={apiResponse}>API call</button>
      <br />
    </div>
  )
}

export default App;