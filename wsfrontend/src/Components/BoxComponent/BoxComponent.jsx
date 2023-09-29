import React, { useEffect } from 'react'
import './BoxComponent.css'

function BoxComponent({ station = {
  Name: 'None', Pressure: 0, Temperature: -300,
  Humidity: -300, Pressure: -300, Altitude: -300
} }) {
  return (
    <div>
      <div className='box'>
        <div className='content'>
          <div className='title'>{station.Name}</div>

          <div className='mainContent'>

            {PrintObjectList(station)}

            <div className='title' style={{ fontSize: '20px' }}>
              Last Report: 1 Minute Ago
            </div>

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
    keys.map((keyName, i) => (

      <li key = {i}>{keyName}: {stations[keyName] }</li>
      
    ))
  );
}

export default BoxComponent;

