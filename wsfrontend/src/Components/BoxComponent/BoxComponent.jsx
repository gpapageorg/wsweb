import React, { useEffect, useState } from 'react'
import './BoxComponent.css'
const apiUrl = "http://localhost:8000/db/ask?loc="

function BoxComponent(location ="null") {

  return (
    <div>
      <div className='box'>
        <div className='content'>

          <div className='mainContent'>

            {PullJson(location.location)}
            </div>
            <div className='title' style={{ fontSize: '20px' }}>
              Last Report: 1 Minute Ago
            </div>

        </div>
      </div>
    </div>
  )
  
}

function PullJson(location)
{
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await fetch(apiUrl+ location);
      const jsonData = await response.json();
      setData(jsonData);
    })();
  }, []);

  let keys = Object.keys(data);
  keys.splice(1,1);
  keys.splice(6,6);

  return (
    keys.map((keyName, i) => (

      <li key = {i}>{keyName}: {data[keyName] }</li>
      
    ))
   );
  }

export default BoxComponent;

