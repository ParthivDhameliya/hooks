import React, { useState } from 'react';

function App() {
  let time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(time);
  const getTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(getTime, 1000);
  return (
    <>
      <div>{cTime}</div>
    </>
  );
}

export default App;
