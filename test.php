<!DOCTYPE html>
<html lang='en'>
<head>
 <title>php test page</title>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
        <META name='author'
                content='George L Bush'/>

<!--Install Genric Required CSS,Jquery,JqueryUI,and bootsrap librarys from  -->
<?php include_once '/var/www/html/site/cdn.php'; ?>

<!--Local CSS -->
 <link rel='stylesheet' href='/site/site.css'>
<!--Local PHP -->
<?php
session_start();
?>
</head>
<body>
<nav id='header'>
<header id=''>Test PHP page</header>
<br/>
<hr/>
</nav>
<MAIN id='main'>
<script>
data="111: paper";
if (/[0-9]+: .*/.test(data)) {

function removeChatId(str) {
n=str.search(/[^0-9: ]/i);
str=str.slice(n);
return str;
}

else {
console.log("no match");
}
</script>
<div id='testing'></div>
<div id='sidebarRight'>
<section>
<?php include_once 'sidebarRight.php'; ?>
</section>
</div>
</MAIN>
<br/>
<hr/>


<br/>

<footer id='footer' class='container-fluid text-center'>
  <h2>glb14e</h2>
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
