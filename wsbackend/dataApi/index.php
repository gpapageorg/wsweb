<?php
    include('./dbRoutines.php'); // File Containing All Necessary Routines Used To Communicate With The Database
    $station = new stdClass();


    $conn = initiateConnection($credentials);
    
    getValues($station); // Getting Values From Url
    insertIntoDb($conn,$station); // Inserting Values Into The Database

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
?>