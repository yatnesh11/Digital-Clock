import React, { useState } from "react";
function App() {
  setInterval(set, 1000);
  const [time, get] = useState("00:00:00");
  function set() {
    var t = new Date().toLocaleTimeString().substring(0, 8);
    get(t);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={set}>Get Time</button>
    </div>
  );
}
export default App;
