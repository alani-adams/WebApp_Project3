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
		<img align="middle" onclick="checkRemote('rock')" id="rock" src="img/rocks.png" alt="rock" width="277" height="210"> <!-- add the onclick="draw_images()" part to each img --> 
		<!-- onclick="draw_images('rock','scissors','win')" -->
		<img align="middle" onclick="checkRemote('paper')" id="paper" src="img/paper.png" alt="paper" width="277" height="210">
		<img align="middle" onclick="checkRemote('scissors')" id="scissors" src="img/scissors.png" alt="scissors" width="277" height="210">

		<img align="middle" onclick="reset()" id="playAgainButton1" src="img/reset.png" alt="Play Again!" width="277" height="210">
		<img align="middle" onclick="reset()" id="playAgainButton2" src="img/reset.png" alt="Play Again!" width="277" height="210">
		<img align="middle" onclick="reset()" id="playAgainButton3" src="img/reset.png" alt="Play Again!" width="277" height="210">
		<img align="middle" id="waiting1" src="img/ice.png" alt="New Game!" width="277" height="210">
		<img align="middle" id="waiting2" src="img/ice.png" alt="New Game!" width="277" height="210">
		<img align="middle" id="waiting3" src="img/ice.png" alt="New Game!" width="277" height="210">
<!--
			<button id='playAgainButton' type='button' onclick="reset()">Play Again!</button>
-->
		</center>
		<br/>	
<center>
<div id='awardDiv' class='award'>
  <img align="middle" id="firstwin" src="img/firstwin.png" alt="First Win Award!">
  <img align="middle" id="a5win" src="img/5win.png" alt="5th Win Award!">
  <img align="middle" id="a25win" src="img/25win.png" alt="25th Win Award!">
  <img align="middle" id="a50win" src="img/50win.png" alt="50th Win Award!">
  <img align="middle" id="firstloss" src="img/firstloss.png" alt="First Loss Award!">
  <img align="middle" id="a5loss" src="img/5loss.png" alt="5th Loss Award!">
  <img align="middle" id="a25loss" src="img/25loss.png" alt="25th Loss Award!">
  <img align="middle" id="a50loss" src="img/50loss.png" alt="50th Loss Award!">
  <img align="middle" id="a100games" src="img/100games.png" alt="100th Game Award!">
  <img align="middle" id="a500games" src="img/500games.png" alt="500th Game Award!">
  <img align="middle" id="a1000games" src="img/1000games.png" alt="1000th Game Award!">
</div>

</center>
<script>
// buttons toggle so is not on page with rock, paper, and scissor buttons
$("#firstwin,#a5win,#a25win,#a50win").hide();
$("#firstloss,#a5loss,#a25loss,#a50loss").hide();
$("#a100games,#a500games,#a1000games").hide();
draw_award();
$("#waiting1").toggle();
$("#waiting2").toggle();
$("#waiting3").toggle();
$("#playAgainButton1").toggle();
$("#playAgainButton2").toggle();
$("#playAgainButton3").toggle();
setup();
</script>

</section>
</div>
<div id='sidebarRight'>
<section>
<?php include_once 'sidebarRight.php'; ?>
</section>
</div>
<script src='p3.js'></script>
<script>makeChat();</script>
