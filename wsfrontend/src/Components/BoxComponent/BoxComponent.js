import React from 'react'
import './BoxComponent.css'

function BoxComponent({ station = { name: 'None', state: 0, temp: -300, hum: -300, press: -300, alt: -300 } }) {
  return (
    <div>
      <div className='box'>
        <div className='content'>
          <div className='title'>{station.name}</div>

            <div className='mainContent'>
              <li>State: {station.state} </li>
              <li>Temperature: {station.temp}&deg;C</li>
              <li>Humidity: {station.hum}%</li>
              <li>Pressure: {station.press}hPa</li>
              <li>Altitude: {station.alt}m</li>

              {/* {console.log(station[0].name)} */}

              {renderObject(station)}

              <div className='title' style={{ fontSize: '20px' }}>
                Last Report: 1 Minute Ago
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}



export default BoxComponent;

