//basic format for jquery inputs, and event methods from w3schools

function compute_winner(localChoice) {
  var remote = Math.floor(Math.random()*(2-0+1)+0);
  var remoteChoice;
  if(remote == 0) {
    remoteChoice = 'rock';
  }
  else if(remote == 1) {
    remoteChoice = 'paper';
  }
  else {
    remoteChoice = 'scissors';
  }
  console.log(remote+" was thrown by remote.")
  console.log(remoteChoice + " was thrown by remote.")
  if (localChoice == 'rock')
    {
    if(remoteChoice == 'rock')
      draw_images(localChoice,remoteChoice,'draw');
	
    else if($remoteChoice == 'paper')
      drawImage(localChoice,remoteChoice,'lose');
    else
      drawImage(localChoice,remoteChoice,'win');
    }
  else if($localChoice == 'paper')
    {
    if(remoteChoice == 'rock')
      draw_images(localChoice,remoteChoice,'win');
    else if(remoteChoice == 'paper')
      drawImage(localChoice,emoteChoice,'draw');
    else
      drawImage(localChoice,remoteChoice,'lose');
    }
  else
    {
    if(remoteChoice == 'rock')
      draw_images(localChoice,remoteChoice,'lose');
    else if(remoteChoice == 'paper')
      drawImage(localChoice,remoteChoice,'win');
    else
      drawImage(localChoice,remoteChoice,'draw');
    }
  }

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

$("#top10").ready(function(){
    $.post("./db/top10.php",{},
    function(returnData) {
	$("#top10").append(returnData);
        console.log(returnData);
        });
    });


  $(".model").click(function(){
    var modelPost=this.dataset.model;
    console.log(modelPost+" button clicked");
      $.post("updateModel.php",{model:modelPost},
      function(postReturn){
      $('#itemDisplay').empty();
      $('#itemDisplay').append(postReturn);
      });
});//post end

  $("article").click(function(){
    var modelPost=this.dataset.model;
    console.log(modelPost+" button clicked");
      $.post("getcopters.php",{c_model:modelPost},
      function(postReturn){
      $('#itemDisplay').empty();
      $('#itemDisplay').append(postReturn);
      });
});//post end


  $("#cart").click(function(){
    var modelPost=this.dataset.model;
    console.log(modelPost+" button clicked");
      $.post("getList.php",{list: 'cart'},
      function(postReturn){
      $('#itemDisplay').empty();
      $('#itemDisplay').append(postReturn);
      });
});//post end


  $("#wishlist").click(function(){
    var modelPost=this.dataset.model;
    console.log(modelPost+" button clicked");
      $.post("getList.php",{list: 'wishlist'},
      function(postReturn){
      $('#itemDisplay').empty();
      $('#itemDisplay').append(postReturn);
      });
});//post end

  //$("#review").click(function(){
  //  var model=this.dataset.model;
  //  console.log("review clicked");
  //});

}); //end ready
function allowDrop(ev) {
    ev.preventDefault();
   
}

function drag(ev) {
    ev.dataTransfer.setData("model", ev.target.dataset.model);
    //console.log(ev.target.dataset.model);
    //ev.dataTransfer.setData("user", ev.target.dataset.user);
    //console.log(ev.target.dataset.user);
}

function drop(ev) {
    ev.preventDefault();
    var modelPost= ev.dataTransfer.getData("model");
    //var userPost= ev.dataTransfer.getData("user");
    var listPost=ev.target.id;
    console.log(listPost+" "+modelPost);
    $.post("updateList.php",{list: listPost,model: modelPost},
    function(returnData) {
	console.log(returnData);
	console.log('finished post');
	});
    }
