import React from 'react'
import Box from '@mui/material/Box';
import './BoxComponent.css'

function BoxComponent({station}) {
  return (
    <div>
      <div className='box'>
        <div className='content'>
        <div className='title'>{station}</div>
        </div>
      </div>
    </div>
  )
}

export default BoxComponent;

