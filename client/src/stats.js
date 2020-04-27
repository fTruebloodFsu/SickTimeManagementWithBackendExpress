import React, { useState } from 'react';
import './App.css';



function Stats() {

  const [totRequests, setValue] = useState(0);

  async function getRequests(){
    const numRequests = await fetch('/users');
    const results = await numRequests.json();
    setValue(results.length);
    return results.length;
  }


  getRequests();

  return (
      <div className="App">
        <header className="App-header">
          <img src="LcDelivery.png" className="App-logo" alt="logo" />
          <h2 onLoad={() => setValue(getRequests())}>Total number of requests: {totRequests}</h2>
        </header>
      </div>
    );
  }

  export default Stats;