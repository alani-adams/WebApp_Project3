<?php 
session_start();
//set rvs.php to go to next page
require_once __DIR__ . '/vendor/autoload.php';

use Facebook\FacebookSession;
use Facebook\FacebookRedirectLoginHelper;
use Facebook\FacebookRequest;
use Facebook\FacebookResponse;
use Facebook\FacebookSDKException;
use Facebook\FacebookRequestException;
use Facebook\FacebookAuthorizationException;
use Facebook\GraphObject;
use Facebook\Entities\AccessToken;
use Facebook\HttpClients\FacebookCurlHttpClient;
use Facebook\HttpClients\FacebookHttpable;

// init app with app id and secret
//for app IT325
FacebookSession::setDefaultApplication( '653849638149328','500dac66a2b2573426fb31f8b97fce5d' );

    $helper = new FacebookRedirectLoginHelper('http://aws1.gbush.pw/p3/index.php' );

try {
  $session = $helper->getSessionFromRedirect();
} catch( FacebookRequestException $ex ) {
  // When Facebook returns an error
} catch( Exception $ex ) {
  // When validation fails or other local issues
}

// see if we have a session
if ($session) {
  // graph api request for user data
//echo "console.log("Got Session!");";
  $request = new FacebookRequest( $session, 'GET', '/me?fields=id' );
  $response = $request->execute();
  $graphObject = $response->getGraphObject();
$fbId=$graphObject->getProperty('id');
echo "<script src='p3.js'></script>";
echo "<script>";
echo "checkFb($fbId);";
echo "</script>";
}
echo "<form id='loginForm' name='login' method='POST'>";
echo "<br/><br/>";
echo "<label for='username'>Username: </label>";
echo "<section class='center'>
        <input type='text' id='username' value='test1'/>
        <label for='password'>Password: </label>
        <input type='password' id='password' class='badBack' value='abc123' />
<div id='feedback'></div>
";
echo "<br/><br/>
	<button type='button' id='loginButton'>Login</button>
<br/><br/>";
echo"  </section>
<section id='loginStatus'>
</section>";
echo"</FORM>
<section class='center'>
<form id='loginForm2' name='login2' method='POST'>
<label>Login Using Facebook Credentials</label>
";
$permissions = array('email', 'user_posts, user_photos, user_likes');
echo '<a href="' . $helper->getLoginUrl($permissions) . '">';
echo "<img src='img/fbLogin2.png' />";
echo "</a>";
echo "<br/><br/>";
echo "<section id='loginStatus2'></section>";
echo "<div id='feedback2'></div>";
echo "<br/><br/>";
echo "</section></FORM>";
?>
<script src='p3.js'></script>


