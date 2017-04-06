<?php
session_start();
//echo "checkUser script";
include '/var/www/html/php/p3dbConnect.php';
$conn=makeConnect();
//DB transactions begins 
$stmt = $conn->prepare("SELECT * FROM p3.user order by win desc limit 10;");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach ($result as $row) {
$return="<tr>";
$return.="<td>$row['displayName']<td>";
$return.="<td>$row['win']<td>";
$return.="<td>$row['loss']<td>";
$return.="</tr>";
}
echo $return;
//echo '<pre>' . print_r( $result, 1 ) . '</pre>';
//echo "<script>console.log($pwd)</script>";dd
        //$myData=array('userName' =>$result['userName'],'displayName' =>$result['displayName'],'win'=>$result['win'],'loss'=>$result['loss']);
        //$myData=$result['userName'];
        //$jsonData=json_encode($myData);
//echo ($jsonData);
//echo ($myData);
?>
