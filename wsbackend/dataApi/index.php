<?php
    $credentials = new stdClass();

    $credentials -> servername = "192.168.2.110";
    $credentials -> username = "root";
    $credentials -> password = "root";
    $credentials -> db = 'wsweb';


    $conn = initiateConnection($credentials);

$station = new stdClass();


// $station -> name = $_GET["name"]; 
// $station -> id = $_GET["id"];
// $station -> temp = $_GET["temp"];
// $station -> hum = $_GET["humidity"];
// $station -> press = $_GET["press"];
// $station -> alt = $_GET["altitude"];
// $station -> soil = $_GET["soil"];
$station -> location = "patras";
$station -> name = "kostas" ;
$station -> id = 0;
$station -> temp = 40;
$station -> hum = 67;
$station -> press = 577;
$station -> alt = 8;
$station -> soil = 8;

insertIntoDb($conn,$station);


function initiateConnection($credentials) 
{
    $conn = new mysqli($credentials -> servername, $credentials -> username, $credentials -> password, $credentials -> db);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully\n";
    return $conn;    
}
function insertIntoDb($conn, $station)
{
    $sqlString = "INSERT INTO ".$station -> location."(Name, id, Temperature, Humidity, Pressure, Altitude, Soil) VALUES('".$station -> name."',".$station -> id.",".$station -> temp.",".$station -> hum."," .$station -> press."," .$station -> alt."," .$station -> soil.")";
    if ($conn->query($sqlString) === TRUE) {
        echo "New record created successfully\n";
    } else {
        echo "Error: " . $sqlString . "<br>" . $conn->error;
    }
}



?>