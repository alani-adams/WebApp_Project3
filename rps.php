<?php
session_start();
?>
<div id='sidebarLeft'>
<nav>
<?php include_once 'sidebarLeft.php'; ?>
</nav>
</div>
<div id='itemDisplay'>
<!--
<section onload="setup()" >
-->
<section>
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

		<img align="middle" onclick="reset()" id="playAgainButton1" src="img/reset.png" alt="Play Again!" width="277" height="210">
		<img align="middle" onclick="reset()" id="playAgainButton2" src="img/reset.png" alt="Play Again!" width="277" height="210">
		<img align="middle" onclick="reset()" id="playAgainButton3" src="img/reset.png" alt="Play Again!" width="277" height="210">
		<img align="middle" id="newGame1" src="img/ice.png" alt="New Game!" width="277" height="210">
		<img align="middle" id="newGame2" src="img/ice.png" alt="New Game!" width="277" height="210">
		<img align="middle" id="newGame3" src="img/ice.png" alt="New Game!" width="277" height="210">
<!--
			<button id='playAgainButton' type='button' onclick="reset()">Play Again!</button>
-->
		</center>
		<br/>	
		<center>
			<a href="#">
			</a>
<script>
// buttons toggle so is not on page with rock, paper, and scissor buttons
/*
$("#paper").toggle();
$("#rock").toggle();
$("#scissors").toggle();
$("#playAgainButton1").toggle();
$("#playAgainButton2").toggle();
$("#playAgainButton3").toggle();
*/
</script>
	</center>	

</section>
</div>
<div id='sidebarRight'>
<section>
<?php include_once 'sidebarRight.php'; ?>
</section>
</div>
<script src='p3.js'></script>
