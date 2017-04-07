<?php
session_start();
//echo "checkUser script";
$userName=$_POST['userName'];
$pwd=$_POST['password'];
include '/var/www/html/php/p3dbConnect.php';
$conn=makeConnect();
//DB transactions begins 
$stmt = $conn->prepare("SELECT * FROM p3.user WHERE userName=:username;");
//$stmt = $conn->prepare("SELECT * FROM p3.user WHERE userName=\'?\'");
$stmt->bindParam(':username', $userName);
//$stmt->execute($userName);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);
//echo '<pre>' . print_r( $result, 1 ) . '</pre>';
//echo "<script>console.log($pwd)</script>";dd
if (password_verify($pwd,$result['hash'])) {
  $_SESSION['authenticated']=1;
  $_SESSION['userName']=$result['userName'];
  $_SESSION['displayName']=$result['displayName'];
  $_SESSION['win']=$result['win'];
  $_SESSION['loss']=$result['loss'];
        $myData=array('userName' =>$result['userName'],'displayName' =>$result['displayName'],'win'=>$result['win'],'loss'=>$result['loss']);
        //$myData=$result['userName'];
        $jsonData=json_encode($myData);
echo ($jsonData);
//echo ($myData);
}
///*
else {
	echo 0;
        //$myData='';
       // $jsonData=json_encode($myData);
       // echo $jsonData;
}
//*/
?>
