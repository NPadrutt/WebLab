<?php

$servername = "localhost";
$username = "root";
$password = "ABCD-1234";
$dbname = "mysql";

$db = new mysqli($servername, $username, $password, $dbname);

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

$sql = "SELECT * FROM Quotes ORDER BY rand() LIMIT 1";
if($result = $db->query($sql)){
    $row = $result -> fetch_assoc();
    
    echo($row["text"]);
}
else{
    echo(mysqli_error($db));
    echo("something is wrong");
}