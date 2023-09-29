import React from 'react'
import BoxComponent from '../Components/BoxComponent/BoxComponent'
import UnderBar from '../Components/Navbar/UnderBar';

function Overview() {
    const patras = {Name : "Patras", temp: 30, hum: 92, press: 1013, alt:900};
    const ioannina = {Name : "Ioannina", temp: 30, hum: 90, press: 1013, alt:900};
    const fortosi = {Name : "Fortosi", temp: 30, hum: 90, press: 1013, alt:900};
  
    return (
        <div>
            <UnderBar page={"Overview"}/>
            <BoxComponent station={patras} />
            <BoxComponent station={ioannina} />
            <BoxComponent station={fortosi} />
        </div>
    )
}

export default Overview;
