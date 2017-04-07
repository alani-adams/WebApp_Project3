//basic format for jquery inputs, and event methods from w3schools

function top10() {
    $.post("./db/top10.php",{},
    function(returnData) {
	$("#topList").html(returnData);
        console.log(returnData);
        });
}//top10 function end

function updateScore(user,gameResult) {
if (gameResult=='win' || gameResult=='loss' || gameResult=='draw')
	console.log("Score is Valid. Updating "+user+" with "+gameResult);
else
	console.log('Invalid input check '+ user+' and '+gameResult);
	
$.post("./db/updateScore.php",
      {
          userName: user ,
          score: gameResult
      },
      function(postReturn){
console.log('updateScore return');
	if (postReturn==0) {
         console.log("returned no results");
    	}
else {
    results=JSON.parse(postReturn);
    //results=postReturn;
    //console.log(results);
    $('#winLable').html("Win: "+results['win']);
    $('#lossLable').html("Loss: "+results['loss']);
    //console.log("Loss: "+results['loss']);
    console.log("Win: "+results['win']);
    console.log("Loss: "+results['loss']);
      }//end else
	}//end postreturn function
	);//jquerry end
}//updateScore end

function checkPwd() {
    var user=document.getElementById('username').value;
    var pwd=document.getElementById('password').value;
      console.log("submitting "+user+" and "+pwd);
    $.post("./db/checkUser.php",
      {
          userName: user ,
          password: pwd
      },
      function(postReturn){
     if (postReturn==0) {
         console.log("returned no results");
    $("#feedback").html("Password/Username not valid.");
    }
else {
    results=JSON.parse(postReturn);
    $("#feedback").html("");
    //results=postReturn;
    //document.writeln(results);
    //console.log(results);
    //console.log(results['userName']);

    var node=document.getElementById('authenticated');
    if (results['userName']) {
        // console.log("UserName: "+results['userName']+"<br/>");
         //console.log("Display Name: "+results['displayName']+"<br/>");
         //console.log("Win: "+results['win']+"<br/>");
        // console.log("Loss: "+results['loss']+"<br/>");
      $('main').load("rps.php"); 
         console.log("post rps.php load");
      }
    else {

	}

}}
    ); //jquery post end
} //end checkPwd

$(document).ready(function(){
 console.log('document Ready');
 $("#loginButton").off('click');

  $("#loginButton").click(function(){
    console.log('login button clicked');
    checkPwd();
  });

  $("#logout").click(function(){
    console.log("Logout run");
    $.post("./db/logout.php",{},function(){
    $('main').load("./db/logout.php"); 
         console.log("Logout ran");
      });
});




}); //end ready
function compute_winner(localChoice) {
  console.log("local Choice: "+localChoice);
  var remote = Math.floor(Math.random()*(2-0+1)+0);
  var score;
  if(remote == 0)
    remoteChoice = 'rock';
  else if(remote == 1)
      remoteChoice = 'paper';
  else
    remoteChoice = 'scissors';
  if(localChoice == 'rock') {
	if(remoteChoice == 'rock')
		score='draw';
	else if(remoteChoice == 'paper')
		score='loss';
	else
		score='win';
  }
  else if(localChoice == 'paper') {
	if(remoteChoice == 'rock')
		score='win';
	else if(remoteChoice == 'paper')
		score='draw';
	else
		score='loss';
	}

  else {
	if(remoteChoice == 'rock')
		score='loss';
	else if(remoteChoice == 'paper')
		score='win';
	else
		score='draw';
	}
// updated section to simplify code by saving as score as variable and having one
// one function each to draw and update sql
var userName=document.getElementById('userLabel').dataset.user;
updateScore(userName,score);
top10();
draw_images(localChoice,remoteChoice,score);
// buttons are set to toggle so they are not on page at same time
	$("#playAgainButton1").toggle();
	$("#playAgainButton2").toggle();
	$("#playAgainButton3").toggle();
	$("#rock").toggle();
	$("#paper").toggle();
	$("#scissors").toggle();
}

function draw_images(localChoice, remoteChoice, result) {
				if(localChoice == 'rock')
					draw_image_rock('left');
				else if(localChoice == 'paper')
					draw_image_paper('left');
				else if(localChoice == 'scissors')
					draw_image_scissors('left');
				if(remoteChoice == 'rock')
					draw_image_rock('right');
				else if(remoteChoice == 'paper')
					draw_image_paper('right');
				else if(remoteChoice == 'scissors')
					draw_image_scissors('right');
				draw_image_winner(result);
}
			// function play_again_image() {
			// 	vvar a_canvas = document.getElementById("a");
   // 				var a_context = a_canvas.getContext("2d");
   // 				var base_image = new Image();
			// 	base_image.src = "img/playAgain.png";
			// 	a_context.drawImage(base_image2, 280, 75, 150, 150 * base_image2.height / base_image2.width);
			// }
function draw_image_rock(location) {
    			var a_canvas = document.getElementById("a");
   				var a_context = a_canvas.getContext("2d");
    			var img = document.getElementById("rock");
    			if(location == 'left')
    				a_context.drawImage(img, 100, 175, 150, 150 * img.height / img.width);
    			else
    				a_context.drawImage(img, 440, 175, 150, 150 * img.height / img.width);
}

function draw_image_paper(location) {
    			var a_canvas = document.getElementById("a");
   				var a_context = a_canvas.getContext("2d");
    			var img = document.getElementById("paper");
    			if(location == 'left')
    				a_context.drawImage(img, 100, 175, 150, 150 * img.height / img.width);
    			else
    				a_context.drawImage(img, 440, 175, 150, 150 * img.height / img.width);
}

function draw_image_scissors(location) {
    			var a_canvas = document.getElementById("a");
   				var a_context = a_canvas.getContext("2d");
    			var img = document.getElementById("scissors");
				if(location == 'left')
    				a_context.drawImage(img, 100, 175, 150, 150 * img.height / img.width);
    			else
    				a_context.drawImage(img, 440, 175, 150, 150 * img.height / img.width);
}

function draw_image_winner(result){
	var a_canvas = document.getElementById("a");
   	var a_context = a_canvas.getContext("2d");
   	var base_image = new Image();
	base_image.src = "img/winner.png";
	var base_image2 = new Image();
	base_image2.src = "img/draw.png";
	if(result == 'win')
		a_context.drawImage(base_image, 10, 100, 150, 150 * base_image.height / base_image.width);
	else if(result == 'loss')
		a_context.drawImage(base_image, 350, 100, 150, 150 * base_image.height / base_image.width);
	else
		a_context.drawImage(base_image2, 280, 75, 150, 150 * base_image2.height / base_image2.width);
}

function setup() {
	var a_canvas = document.getElementById("a");
   	var a_context = a_canvas.getContext("2d");
   	var base_image = new Image();
	base_image.src = "img/boom.png";
	var base_image1 = new Image();
	base_image1.src = "img/boom.png";
	a_context.drawImage(base_image1, 10, 50, 350, 350 * base_image1.height / base_image1.width);
	a_context.drawImage(base_image, 350, 50, 350, 350 * base_image.height / base_image.width);
}

function reset() {
	$("#playAgainButton1").toggle();
	$("#playAgainButton2").toggle();
	$("#playAgainButton3").toggle();
	$("#rock").toggle();
	$("#paper").toggle();
	$("#scissors").toggle();
	var a_canvas = document.getElementById("a");
	a_canvas.width = a_canvas.width;
	setup();
}
