<?php
// start session
session_start();
// added in v4.0.0
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
// for app TEST
//FacebookSession::setDefaultApplication( '1287131868043995','dbe7f1ef3a2bc35d06d0c1a07c56cd67' );

// login helper with redirect_uri

    $helper = new FacebookRedirectLoginHelper('https://www.gbush.pw/fb/index.php' );
   // $helper = new FacebookRedirectLoginHelper('https://www.gbush.pw/fb/fb.php' );

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
  $request = new FacebookRequest( $session, 'GET', '/me?fields=id' );
 // $request = new FacebookRequest( $session, 'GET', '/me' );
  $response = $request->execute();
  // get response
  $graphObject = $response->getGraphObject();
$userId=$graphObject->getProperty('id');
return $userId;
// echo '<pre>' . print_r( $data, 1 ) . '</pre>';
}
 else {
  // show login url
$permissions = array('email', 'user_posts, user_photos, user_likes');
$helper->getLoginUrl($permissions);
}

?>
