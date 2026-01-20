import React, { useState } from 'react'

export const App = () => {

  const [num, setNum] = useState(1);

  let x = 1;

  const handleAdd = () => {
    // x++;
    // console.log(x);
    // x++;
    setNum(num => num + 1);
  };

  console.log(num);

  return (
    <div><h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
export default App;
