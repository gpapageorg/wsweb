import React from 'react'
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
            {/* <li>State: {station.state} </li>
            <li>Temperature: {station.temp}&deg;C</li>
            <li>Humidity: {station.hum}%</li>
            <li>Pressure: {station.press}hPa</li>
            <li>Altitude: {station.alt}m</li> */}
            
            {Object.keys(station).map((keyName, i) => (
              <li>{keyName}: {station[keyName]}</li>
            ))}

            {console.log(Object.keys(station))}
            <div className='title' style={{ fontSize: '20px' }}>
              Last Report: 1 Minute Ago
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

// function printObjectList(station)
// {
//   return(

//   );
// }

export default BoxComponent;

