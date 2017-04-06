<?php
session_start();
session_unset();
session_destroy();
?>
<script src='p3.js'></script>
<script> 
$(document).ready(function(){
$('#logout').remove();
$('#userID').remove();
$('main').load("welcome.php");
console.log("past logout load");
});
</script>
