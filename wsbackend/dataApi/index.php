<?php
    include('./dbRoutines.php');


    $conn = initiateConnection($credentials);

    $station = initializeStationObj();
    getValues($station); http://localhost/api/index.php?loc=patras&name=patrasin&id=5&temp=25&humidity=23&press=1013&altitude=10&soil=10


    insertIntoDb($conn,$station);




function initializeStationObj()
{
    $station = new stdClass();
    $station -> location =  -300 ;
    $station -> name = -300 ;
    $station -> id =  -300 ;
    $station -> temp =  -300 ;
    $station -> hum =  -300 ;
    $station -> press =  -300 ;
    $station -> alt =  -300 ;
    $station -> soil =  -300 ;
    return $station;
}

function getValues(&$station)
{
    $station -> location = $_GET["loc"];
    $station -> name = $_GET["name"]; 
    $station -> id = $_GET["id"];
    $station -> temp = $_GET["temp"];
    $station -> hum = $_GET["humidity"];
    $station -> press = $_GET["press"];
    $station -> alt = $_GET["altitude"];
    $station -> soil = $_GET["soil"];
}
function fill($station)
{
    $station -> location = "patras";
    $station -> name = "kostas" ;
    $station -> id = 0;
    $station -> temp = 40;
    $station -> hum = 67;
    $station -> press = 577;
    $station -> alt = 8;
    $station -> soil = 0;
}
?>