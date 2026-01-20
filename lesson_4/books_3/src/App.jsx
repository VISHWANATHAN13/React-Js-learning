import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [input, setInput] = useState("");
  const[displayed,setDisplayed]=useState("");

  const inputRef = useRef();

  console.log("getting rendered");

  // useEffect(() => {
  //   inputRef.current = input;
  // }, [input]);

  const display = () => {
    inputRef.current.focus();
    setDisplayed(inputRef.current.value);
    console.log(inputRef.current.value);

  }

  return (
    <div>
      <h1>input</h1>
      <input type="text" 
      ref={inputRef}
       value={input}
        onChange={(event) => setInput(event.target.value)} />
      <br /><br />
      {/* <input ref={inputRef} type="text" /> <br /><br /> */}
      <button onClick={display}>show input</button>
      <p>my name is : {input}</p>
      <p> my name is : {displayed}</p>
    </div>
  )
}

export default App