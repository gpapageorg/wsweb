import React, { useEffect, useState } from 'react'
import './BoxComponent.css'
const apiUrl = "http://localhost:8000/db/ask?loc=patras"
function BoxComponent(location ="null") {
 PullJson()
 const station = {Name : "Patras", Temperature: 30 + " \u00b0C", Humidity: 92, Pressure: 1013, Altitude:900};

  return (
    <div>
      <div className='box'>
        <div className='content'>
          {/* <div className='title'>{station.Name}</div> */}

          <div className='mainContent'>

            {PullJson(location)}
            </div>
            <div className='title' style={{ fontSize: '20px' }}>
              Last Report: 1 Minute Ago
            </div>

        </div>
      </div>
    </div>
  )
  
}

function PrintObjectList(stations)
{
  let keys = Object.keys(stations);
  keys.splice(0,1);
  
  return(
    // keys.map((keyName, i) => (

    //   <li key = {i}>{keyName}: {stations[keyName] }</li>
      
    // ))
    <div>Hello</div>

  );
}
function PullJson(location)
{
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(jsonData);
    })();
  }, []);

  let keys = Object.keys(data);

  return (
    keys.map((keyName, i) => (

      <li key = {i}>{keyName}: {data[keyName] }</li>
      
    ))
   );
  }

export default BoxComponent;

