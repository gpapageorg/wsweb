import React from 'react'
import Box from '@mui/material/Box';
import './BoxComponent.css'
import { Grid } from '@mui/material'

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
              <li>Temperature:{station.temp}&deg;C</li>
              <li>Humidity: {station.hum}%</li>
              <li>Pressure: {station.press}hPa</li>
              <li>Altitude: {station.alt}m</li>
            {/* </Grid>


          </Grid> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxComponent;

