import React, { useState, useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}>toggle theme</button><br />
      {doubleNumber}
      {/* <div style={themeStyles}>{doubleNumber}</div> */}
    </div>
  );
};

export default App;

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++);
  console.log("slow function running");
  
  return num * 2;
}
