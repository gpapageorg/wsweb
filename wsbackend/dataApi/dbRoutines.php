<?php
    $credentials = new stdClass();

    $credentials -> servername = "192.168.2.110";
    $credentials -> username = "root";
    $credentials -> password = "root";
    $credentials -> db = 'wsweb';
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
        $sqlString = "INSERT INTO ".$station -> location." (Name, id, Temperature, Humidity, Pressure, Altitude, Soil) VALUES('".$station -> name."',".$station -> id.",".$station -> temp.",".$station -> hum."," .$station -> press."," .$station -> alt."," .$station -> soil.")";
        if ($conn->query($sqlString) === TRUE) {
            echo "New record created successfully\n";
        } else {
            echo "Error: " . $sqlString . "<br>" . $conn->error;
        }
    }
    
?>