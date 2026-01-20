import React from 'react'
import withClickTracking from './withClickTracking';
import Button from './Button';

const App = () => {

  const ButtonWithTracking = withClickTracking(Button);

  return (
    <div>
      <ButtonWithTracking label={"Pay now"} trackingInfo={{ "amount": 2000, user: "jack" }} />
    </div>
  )
}

export default App;