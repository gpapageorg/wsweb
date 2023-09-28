import React from 'react'
import UnderBar from '../../Components/Navbar/UnderBar';
import BoxComponent from '../../Components/BoxComponent/BoxComponent'


function Ioannina() {
    const patraInside = {name : "Inside", state: 1,  temp: 30, hum: 92, press: 1013, alt:900};

    return (
        <div>
            <UnderBar page={"Ioannina"} />
            <div>
                <BoxComponent station={patraInside}/>
            </div>
        </div>
    )
}

export default Ioannina
