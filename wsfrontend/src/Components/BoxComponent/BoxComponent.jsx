import React, { useEffect } from 'react'
import './BoxComponent.css'
const apiUrl = "http://localhost:8000/db/ask?loc=patras"
function BoxComponent(location ="null") {
 PullJson()

  return (
    <div>
      <div className='box'>
        <div className='content'>
          {/* <div className='title'>{station.Name}</div> */}

          <div className='mainContent'>

            {PullJson()}
            </div>
            <div className='title' style={{ fontSize: '20px' }}>
              Last Report: 1 Minute Ago
            </div>

        </div>
      </div>
    </div>
  )
  
}

// function PrintObjectList(stations)
// {
//   let keys = Object.keys(stations);
//   keys.splice(0,1);
  
//   return(
//     keys.map((keyName, i) => (

//       <li key = {i}>{keyName}: {stations[keyName] }</li>
      
//     ))
//   );
// }
function PullJson()
{
  fetch(apiUrl)
    .then(response => response.json())
    .then((jsonData) => {
      let keys = Object.keys(jsonData);
      return(
        keys.map((keyName, i) => (
      
          <li key = {i}>{keyName}: {jsonData[keyName] }</li>
        ))
      );

    })
    .catch((error) => {
     console.log(error)
    })
  }

export default BoxComponent;

