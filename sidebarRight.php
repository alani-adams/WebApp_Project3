<?php
session_start();
$userDisplay=$_SESSION['displayName'];
$userName=$_SESSION['userName'];
$win=$_SESSION['win'];
$loss=$_SESSION['loss'];
//$user=echo "<script>results['userName'];</script>";
echo "<label id='userLabel' data-user=$userName>User: $userDisplay</label>
<br/>
<label id='winLable'>Win: $win</label>
<br/>
<label id='lossLable'>Loss: $loss</label>
<br/>
<button type='button' id='logout'>Logout</button>
<br/>
";
?>

