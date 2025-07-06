<?php 

//initialize constants for database access
$host = "localhost";
$dbname = "members";
$username = "grandpappy27";
$password = "welovedoug";

$connection = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
	die("connection failed: " .mysqli_connect_error());
}
else{
	die("connection success");
}

?>