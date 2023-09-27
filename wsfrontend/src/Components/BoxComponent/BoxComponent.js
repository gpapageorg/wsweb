import React from 'react'
import './BoxComponent.css'

function BoxComponent({ station }) {
  return (
    <div>
      <div className='box'>
        <div className='content'>
          <div className='title'>{station.name}</div>
          <div className='mainContent'>
          {/* <Grid container rowspacing={1}> */}

            {/* <Grid item xs={6}> */}
              <li>State: Up</li>
              <li>Temperature: {station.temp}&deg;C</li>
              <li>Humidity: {station.hum}%</li>
              <li>Pressure: {station.press}hPa</li>
              <li>Altitude: {station.alt}m</li>
            {/* </Grid>
          </Grid> */}

          <div className='title' style={{fontSize:'20px'}}>
          Last Report: 1 Minute Ago
          </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BoxComponent;

