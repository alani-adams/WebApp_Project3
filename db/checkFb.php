<?php
session_start();
//echo "checkUser script";
$facebookID=$_POST['facebookID'];
//$facebookID='1264024106986118';
//echo "$facebookID";
include '/var/www/html/php/p3dbConnect.php';
$conn=makeConnect();
//DB transactions begins 
$stmt = $conn->prepare("SELECT * FROM p3.user WHERE facebookID=:facebookID;");
//$stmt = $conn->prepare("SELECT * FROM p3.user WHERE userName=\'?\'");
$stmt->bindParam(':facebookID', $facebookID);
//$stmt->execute($userName);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);
//echo '<pre>' . print_r( $result, 1 ) . '</pre>';
//echo "<script>console.log($pwd)</script>";dd
if ($result['facebookID'] == $facebookID ) {
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
