import React from 'react'
import UnderBar from '../../Components/Navbar/UnderBar';
import BoxComponent from '../../Components/BoxComponent/BoxComponent'


function Ioannina() {
    const ioanninaOutside = {Name : "Outisde", State: 1,  Temperature: 30, Humidity: 92, Pressure: 1013, Altitude:900};

    return (
        <div>
            <UnderBar page={"Ioannina"} />
            <div style={{}}>
                <BoxComponent station={ioanninaOutside}/>
            </div>
        </div>
    )
}

export default Ioannina
