<?php
session_start();
$userDisplay=$_SESSION['displayName'];
$userName=$_SESSION['userName'];
$win=$_SESSION['win'];
$loss=$_SESSION['loss'];
echo "<script> var userName="+$userName+"; </script>";
//$user=echo "<script>results['userName'];</script>";
?>
<label id='userLabel' data-user = '<?php echo $userName;?>'>
User:<?php echo $userDisplay; ?> <br/>UserName: <?php echo $userName;?> <br/></label>
<br/>
<label id='winLable'>Win: <?php echo $win ?></label>
<br/>
<label id='lossLable'>Loss: <?php echo $loss; ?></label>
<br/>
<button type='button' id='logout'>Logout</button>
<br/>

