<?php
echo "checkUser script";
//localized variables passed into variables
$userName=$_POST['userName'];
$pwd=$_POST['password'];

//Connect to DB
//see example
include '/var/www/html/php/p3dbConnect.php';
//DB transactions begins 
//$stmt = $conn->prepare("SELECT * FROM user WHERE name=:username;");
$stmt = $conn->prepare("SELECT * FROM user WHERE ?");
//$stmt->bindParam(':username', $user);
//$stmt->execute($userName);
//$result = $stmt->fetch(PDO::FETCH_ASSOC);
//echo '<pre>' . print_r( $result, 1 ) . '</pre>';
/*
// start dummy code
// replace with actual DB transaction and processing
if ($userName == 'test1') {
  $win=5;
  $loss=2;
  $response = array ('name'=>$userName,'win'=>$win,'loss'=>$loss);
  echo "<script>console.log($response);</script>";
  $response=json_encode($response);
}
else {
  $response = 0;
  }

// end dummy code

//DB transactions completed
//Disconnect from DB
*/
include '/var/www/html/php/dbDisconnect.php';
$response=0;
return $response;
?>
