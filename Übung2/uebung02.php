<?php
try {
    $servername = "localhost";
    $username = "root";
    $password = "ACBD-1234";
    $dbname = "mysql";

    $db = new mysqli($servername, $username, $password, $dbname);

    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    $sql = "SELECT * FROM Quotes LIMIT 1 )";
    $result = $db->query($sql);

    $row = $result -> fetch_assoc();

    echo("everything went fine");
} catch(Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
}