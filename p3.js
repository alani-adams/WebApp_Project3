// global variables
var remoteUser,userName;
var remoteChoice=null;
var localChoice=null;
var chatId=null;
var conn=null;
rockImage=document.getElementById("rock");
paperImage=document.getElementById("paper");
scissorsImage=document.getElementById("scissors");
winnerImage = new Image();
winnerImage.src = "img/winner.png";
drawImage = new Image();
drawImage.src = "img/draw.png";
var boomImage = new Image();
boomImage.src = "img/boom.png";


//basic format for jquery inputs, and event methods from w3schools

// setup Connection

// Check for existing connections
function makeChat() {
    if ( ! conn) {
    //console.log("Need Connection");
// Websocket Config for PHP script which must be started manually every time
    //var conn = new WebSocket('ws://aws1.gbush.pw:22000');
  conn = new WebSocket('ws://aws1.gbush.pw:8080/examples/websocket/chat');
  messageListen();
  }
// Run action with new connection
}

function messageListen() {
  conn.onmessage = function(e) {
  msg=e.data;
  //console.log('Message is: '+msg);
  userName=document.getElementById('userLabel').dataset.user;
  console.log(userName);

  if (RegExp(userName).test(msg)) { 
    console.log("Me: "+msg);
  }
  else if (/rock/i.test(msg)) {
    remoteChoice="rock";
    console.log(remoteChoice + " was detected.")
    checkBoth();
  }
else if (/paper/i.test(msg)) {
  remoteChoice="paper";
  console.log(remoteChoice + " was detected.")
  checkBoth();
}
else if (/scissors/i.test(msg)) {
  remoteChoice="scissors";
  console.log(remoteChoice + " was detected.")
  checkBoth();
}
else {
  console.log("Else: " + msg);
}
    };
} // end listener


function findChatId(str) {
    //var str = "Welcome - your id is 221."; 
    //var str = "* Guest3 has joined."
    var n = str.search(/Guest[0-9]+.*/i);
    str=str.slice(n);
    n = str.search(/[^(Guest)[0-9]+/i);
    str = str.slice(0,n);
    //console.log('ChatID: '+str);
    return str;
}

function removeChatId(str) {
n=str.search(/[^0-9: ]/i);
str=str.slice(n);
return str;
}

function send(testMsg) {
var userName=document.getElementById('userLabel').dataset.user;
  testMsg=userName+" "+testMsg;
      conn.send(testMsg);
      console.log("Sent: " + testMsg);
    }


function top10() {
    $.post("./db/top10.php",{},
    function(returnData) {
	$("#topList").html(returnData);
        //console.log(returnData);
        });
}//top10 function end

function updateScore(user,gameResult) {
if (! (gameResult=='win' || gameResult=='loss' || gameResult=='draw') )
	console.log('Invalid input check '+ user+' and '+gameResult);
	
$.post("./db/updateScore.php",
      {
          userName: user ,
          score: gameResult
      },
      function(postReturn){
//console.log('updateScore return');
	if (postReturn==0) {
         console.log("Update Score Function returned no results");
    	}
else {
    results=JSON.parse(postReturn);
    node=document.getElementById('userLabel');
    //results=postReturn;
    //console.log(results);
    check_awards(results['win'],results['loss']);
    $('#winLable').html("Win: "+results['win']);
    $('#lossLable').html("Loss: "+results['loss']);
    node.dataset.win=results['win'];
    node.dataset.loss=results['loss'];

    //console.log("Loss: "+results['loss']);
    //console.log("Win: "+results['win']);
    //console.log("Loss: "+results['loss']);
      }//end else
	}//end postreturn function
	);//jquerry end
}//updateScore end

function checkPwd() {
    var user=document.getElementById('username').value;
    var pwd=document.getElementById('password').value;
      //console.log("submitting "+user+" and "+pwd);
    $.post("./db/checkUser.php",
      {
          userName: user ,
          password: pwd
      },
      function(postReturn){
     if (postReturn==0) {
         console.log("Check Password returned no results");
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
         //console.log("post rps.php load");
      }
    else {

	}

}}
    ); //jquery post end
} //end checkPwd

function checkFb(fbId) {
console.log("Facebook Check "+fbId);
    $.post("./db/checkFb.php",
      {
          facebookID: fbId
      },
      function(postReturn){
	console.log(postReturn);
     if (postReturn==0) {
         console.log("Check Password returned no results");
    $("#feedback2").html("Facebook Login/ID not valid.");
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
         //console.log("post rps.php load");
      }
    else {

        }

}}
    ); //jquery post end
} //end Fuction: checkFb


$(document).ready(function(){

//username=document.getElementById('userLabel').dataset.user;
 console.log('document Ready');
// console.log(userName);



 $("#loginButton").off('click');
  $("#loginButton").click(function(){
    console.log('login button clicked');
    checkPwd();
  });

 $("#logout").off('click');
  $("#logout").click(function(){
    $.post("./db/logout.php",{},function(){
    $('main').load("./db/logout.php"); 
         console.log("Logout ran");
      });
  });//end jQuery function

}); //end ready

function checkRemote(passed){
localChoice = passed;
send(localChoice);
// buttons are set to toggle so they are not on page at same time
	$("#waiting1").toggle();
	$("#waiting2").toggle();
	$("#waiting3").toggle();
	$("#rock").toggle();
	$("#paper").toggle();
	$("#scissors").toggle();
if(remoteChoice){
compute_winner();
}
}

function checkBoth(){
if(remoteChoice && localChoice){
compute_winner();
}
}

function compute_winner() {
  //console.log("local Choice: "+localChoice);
  //send(localChoice);
 // var remote = Math.floor(Math.random()*(2-0+1)+0);
  var score;

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
        $("#waiting1").toggle();
        $("#waiting2").toggle();
        $("#waiting3").toggle();
        $("#playAgainButton1").toggle();
        $("#playAgainButton2").toggle();
        $("#playAgainButton3").toggle();
localChoice=null;
remoteChoice=null;
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
	console.log('Setup Function');
	var a_canvas = document.getElementById("a");
   	var a_context = a_canvas.getContext("2d");
   	//var base_image = boomImage;
   	//var base_image = new Image();
	//base_image.src = "img/boom.png";
//base_image.onload = function() {
//boomImage.onload = function() {
console.log ('Boom triggered');
	a_context.drawImage(boomImage, 10, 50, 350, 350 * boomImage.height / boomImage.width);
	//a_context.drawImage(base_image, 10, 50, 350, 350 * base_image.height / base_image.width);
	a_context.drawImage(boomImage, 350, 50, 350, 350 * boomImage.height / boomImage.width);
	//a_context.drawImage(base_image, 350, 50, 350, 350 * base_image.height / base_image.width);
  
if (1) {
// use if we want to remove boom after a timed delay 
//a_context.clearRect(0, 0, 750, 450);
}

//} from onload
	//a_context.drawImage(base_image1, 10, 50, 350, 350 * base_image1.height / base_image1.width);
}

function reset() {
	console.log('Reset Function');
	$("#playAgainButton1").toggle();
	$("#playAgainButton2").toggle();
	$("#playAgainButton3").toggle();
	$("#rock").toggle();
	$("#paper").toggle();
	$("#scissors").toggle();
	var a_canvas = document.getElementById("a");
	a_canvas.width = a_canvas.width;
	send("Reset");
	setup();
}

function check_awards(win,loss) {
var msg=null;
var msg1=null;
var msg2=null;
var node=document.getElementById('userLabel');
var oldWin=node.dataset.win;
var oldLoss=node.dataset.loss;
console.log("Win: "+ win + " Old Win: " + oldWin+ " Loss: " + loss + " Old Loss: " +oldLoss);

//cover win sum if tie
if (win-oldWin == 0.5) {
if (win == 50 ) {
  msg1="Reached 50th win.";
  }
else if (win==25) {
  msg1="Reached 25th win.";
  }
else if (win==5) {
  msg1="Reached 5th win.";
  }
else if (win==0.5) {
  msg1="Reached 1st win.";
  }
else {
  msg1=null;
  }
}

//check win sum if regular win
else if (win-oldWin == 1.0) {
if (win == 50 || win == 50.5 ) {
  msg1="Reached 50th win.";
  }
else if (win==25 || win==25.5) {
  msg1="Reached 25th win.";
  }
else if (win==5 || win==5.5) {
  msg1="Reached 5th win.";
  }
else if (win==1.0) {
  msg1="Reached 1st win.";
  }
else {
  msg1=null;
  }
}

//check loss sum
else if (loss-oldLoss== 1) {
if (loss == 50) {
  msg1="Reached 50th loss."
  }
else if (loss==25) {
  msg1="Reached 25th loss."
  }
else if (loss==5) {
  msg1="Reached 5th loss."
  }
else if (loss==1) {
  msg1="Reached 1st loss."
  }
else {
  msg1=null;
  }
}

//check game sum
var sum=parseFloat(win)+parseFloat(loss);
if (win-oldWin==0.5) {
console.log("Game sum tie checks.");
console.log(sum);
if (sum==1000.0) {
  msg2="Reached 1000th game.";
  }
else if (sum==500.0) {
  msg2="Reached 500th game.";
  }
else if (sum==100.0) {
  msg2="Reached 100th game.";
  console.log("100th game!");
  }
else {
  msg2=null;
}
}
else {
if (sum==1000.0 || sum==1000.5) {
  msg2="Reached 1000th game.";
  }
else if (sum==500.0 || sum==500.5) {
  msg2="Reached 500th game.";
  }
else if (sum==100.0 || sum==100.5) {
  msg2="Reached 100th game.";
  }
else {
  msg2=null;
  }
}

//format message
if (msg1!=null && msg2!=null) {
  msg=msg1+"\n"+msg2;
  }
else if (msg1!=null) {
  msg=msg1;
  }
else if (msg2!=null) {
  msg=msg2;
  }
else {
  msg=null;
}
if (msg!=null) {
window.alert(msg);
}
}// end function

function draw_award() {
    node=document.getElementById('userLabel');
    win=parseFloat(node.dataset.win);
    loss=parseInt(node.dataset.loss);
    var award=new Image();  
var sum=parseFloat(win)+parseFloat(loss);
//draw winAwards
  node=document.getElementById('winAward');
  node.innerHTML="";
  if (win >= 50) {

  }
}// end function
