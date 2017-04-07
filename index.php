<!DOCTYPE html>
<html lang='en'>
<head>
 <title>Rock Paper Scissors</title>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
        <META name='author'
                content='George L Bush Kyle Carter'/>
        <META name= 'date'
                content='7 Apr 2017'/>
        <META name='assignment'
                content='Project 3'/>
        <META name='acu username'
                content='glb14e,cab13e,alp13d'/>
        <META name='major'
                content='Information Technology'/>

<!--Install Genric Required CSS,Jquery,JqueryUI,and bootsrap librarys from  -->
<?php include_once './cdn/cdn.php'; ?>

<!--Local CSS -->
<!-- 
 <link rel='stylesheet' href='/site/site.css'>
-->
<link rel='stylesheet' href='p3.css'>

<!--Local PHP -->
<?php
session_start();
$userName=$_SESSION['userName'];
$authenticated=$_SESSION['authenticated'];
?>

</head>

<body>

<nav id='header'>
        <nav><a href='/index.html'>Home</a></nav>
<header id=''>Rock-Paper-Scissors</header>
<br/>
<hr/>
</nav>
<MAIN id='main'>
<?php include_once "welcome.php" ?>
</MAIN>
<br/>
<hr/>


<br/>

<footer id='footer' class='container-fluid text-center'>
  <h2>glb14e,cab13e,alp13d</h2>
<nav><a href="#top">Click to go to main page</a></nav>
</footer>

<script src='p3.js'></script>
<?php
if ($authenticated && $userName) {
echo "<script>console.log($authenticated);</script>"; 
echo '<script>$("main").load("rps.php");</script>'; 
}
?>

</body>
</html>
