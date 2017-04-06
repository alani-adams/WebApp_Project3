<?php
session_start();
include_once '../php/proj2.php';
$model=$_POST["model"];
$result=makeConnect2('getModel','p2',$model);
//echo "console.log('Ran Connect');";

if ($result) {
	//$myData=array('userName' =>$result);
	//$jsonData=json_encode($myData);
return $result;
}
else {
	$myData='';
	return $myData;
}
?>
