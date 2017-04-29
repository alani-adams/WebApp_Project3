<?php
session_start();
//echo "checkUser script";
include '../../php/p3dbConnect.php';
$conn=makeConnect();
//DB transactions begins 
$stmt = $conn->prepare("SELECT * FROM p3.user order by win desc limit 10;");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo "<table><tr>
    <th>Display Name</th>
    <th>Win</th>
    <th>Loss</th>
</tr>";
foreach ($result as $key=>$value) {
echo "<tr>";
echo '<td>'.$value['displayName'].'</td>';
echo '<td>'.$value['win'].'</td>';
echo '<td>'.$value['loss'].'</td>';
echo "</tr>";
}
echo "</table>";
//$return='test';
//echo '<pre>' . print_r( $result, 1 ) . '</pre>';
//echo "<script>console.log($pwd)</script>";dd
        //$myData=array('userName' =>$result['userName'],'displayName' =>$result['displayName'],'win'=>$result['win'],'loss'=>$result['loss']);
        //$myData=$result['userName'];
        //$jsonData=json_encode($myData);
//echo ($jsonData);
//echo ($myData);
?>
