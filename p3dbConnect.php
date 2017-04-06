<?php
// include connectStart before database sql transaction(s)
// include connectStop after database sql transaction(s)
function makeConnect() {
$servername = 'localhost';
$username = 'www-p3';
$password = '1qaz!QAZ';
$dbname = 'p3';
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
return $conn;
  }
?>
