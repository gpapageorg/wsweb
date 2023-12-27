import React from "react";
import BoxComponent from "../Components/BoxComponent/BoxComponent";
import UnderBar from "../Components/Navbar/UnderBar";

function Overview() {
  const patras = {
    Name: "Patras",
    Temperature: 30 + " \u00b0C",
    Humidity: 92,
    Pressure: 1013,
    Altitude: 900,
  };
  const ioannina = {
    Name: "Ioannina",
    Temperature: 30 + " \u00b0C",
    Humidity: 90,
    Pressure: 1013,
    Altitude: 900,
  };
  const fortosi = {
    Name: "Fortosi",
    Temperature: 30 + " \u00b0C",
    Humidity: 90,
    Pressure: 1013,
    Altitude: 900,
  };

  return (
    <div>
      <UnderBar page={"Overview"} />
      <BoxComponent location="patrasin" />
      {/* <BoxComponent station={ioannina} />
      <BoxComponent station={fortosi} /> */}
    </div>
  );
}

export default Overview;
