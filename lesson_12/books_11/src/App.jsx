import React, { useEffect, useState } from 'react'

const App = () => {

  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(2);

  const getData =()=>{
    console.log('Data recieved');
    
  }

  useEffect(() => {
    
    return () => {
      getData();
    };
  }, []);

  useEffect(() => {
    
    return () => {
      // getData();
      console.log('First value changed');
      
    };
  }, [first]);

  useEffect(() => {
    
  
    return () => {
      console.log('Second value changed');
      
    }
  }, [second]);
  
  

  return (
    <div>
      <h1>First: {first} </h1>
      <h1>Second: {second} </h1><br />
      <button onClick={()=>setFirst((curr => curr+1))}>Add First</button><br /><br />
      <button onClick={()=>setSecond((curr => curr+1))}>Add Second</button>
    </div>
  )
}

export default App;