import React, { Component } from 'react'
import UnderBar from '../../Components/Navbar/UnderBar';
import BoxComponent from '../../Components/BoxComponent/BoxComponent'

function Patras() {
    const patraInside = {name : "Inside", state: 1,  temp: 30, hum: 92, press: 1013, alt:900};
    const patraOutside = {name : "Outside",state: 1, temp: 30, hum: 90, press: 1013, alt:900};
    return (
        <div>
            <UnderBar page={"Patras"} />
            <BoxComponent station={patraInside}/>
            <BoxComponent station={patraOutside}/>

        </div>
    )
}

export default Patras
