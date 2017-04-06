<?php 
session_start();
//set rvs.php to go to next page
?>
<form id='loginForm' name='login' method='POST'>
<br/>

<br/>
<label for="username">Username: </label>
  <section class='center'>
        <input type="text" id="username" value='test1'/>

        <label for="password">Password: </label>
        <input type="password" id="password" class="badBack" value='abc123' />
<div id="feedback"></div>

	<br/>
	<br/>
	<button type='button' id='loginButton'>Login</button>
<br/>
<br/>
  </section>
<section id='loginStatus'>
</section>
</FORM>
<script src='p3.js'></script>


