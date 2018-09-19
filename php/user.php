<?php
	$user = $_REQUEST["user"];
	$psw = $_REQUEST["psw"];
	
	$admin = "admin";
	$psw1 = "123456";
	if($admin == $user && $psw1 == $psw){
//		echo 1;
		echo $user;
	}else{
		echo 0;
	}
?>