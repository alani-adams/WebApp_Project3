<?php
session_start();
?>
<div id='sidebarLeft'>
<nav>
<?php include_once 'sidebarLeft.php'; ?>
</nav>
</div>
<div id='itemDisplay'>
<section>
	<body onload="setup()" >
		<center>
			<h1>Play Rock, Paper, Scissors!</h1>
		</center>
		<center> 
			<canvas id="a" width="700" height="450" style="border:1px solid #d3d3d3;">Your browser doesn't support Canvas</canvas> 
		</center>
		<br/><br/>
		<center>
		<img align="middle" onclick="compute_winner('rock')" id="rock" src="img/rocks.png" alt="rock" width="277" height="210"> <!-- add the onclick="draw_images()" part to each img --> 
		<!-- onclick="draw_images('rock','scissors','win')" -->
		<img align="middle" onclick="compute_winner('paper')" id="paper" src="img/paper.png" alt="paper" width="277" height="210">

		<img align="middle" onclick="compute_winner('scissors')" id="scissors" src="img/scissors.png" alt="scissors" width="277" height="210">
		</center>
		<br/>	
		<center>
			<a href="#">
			<button id='playAgainButton' type='button' onclick="reset()">Play Again!</button>
<script>
// buttons toggle so is not on page with rock, paper, and scissor buttons
$("#playAgainButton").toggle();
</script>
</a>
	</center>	
	</body>


</section>
</div>
<div id='sidebarRight'>
<section>
<?php include_once 'sidebarRight.php'; ?>
</section>
</div>
<script src='p3.js'></script>
