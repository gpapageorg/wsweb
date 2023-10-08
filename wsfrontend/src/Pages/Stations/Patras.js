import UnderBar from '../../Components/Navbar/UnderBar';
import BoxComponent from '../../Components/BoxComponent/BoxComponent'

function Patras() {
    const patraInside = {Name : "Inside", State: 1,  Temperature: "30", Humidity: "92"};
    const patraOutside = {Name : "Outside", State: 1,  Temperature: "30", Humidity: "92", Pressure: "1013", Altitude:"900"};
    return (
        <div>
            <UnderBar page={"Patras"} />
            <BoxComponent station={patraInside}/>
            <BoxComponent station={patraOutside}/>

        </div>
    )
}

export default Patras
