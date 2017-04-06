<?php
session_start();
$user=$_SESSION['displayName'];
$win=$_SESSION['loss'];
$loss=$_SESSION['loss'];
//$user=echo "<script>results['userName'];</script>";
echo "<label id='userLable' data-user=$user>User: $user</label>
<br/>
<label id='userLable' data-user=$win>Win: $win</label>
<br/>
<label id='userLable' data-user=$loss>Loss: $loss</label>
<br/>
<button type='button' id='logout'>Logout</button>
<br/>
";
?>

