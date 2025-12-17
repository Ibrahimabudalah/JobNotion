<?php

$db_userName = "root";
$db_hostName = "localhost";
$db_name = "JobNotion";
$db_pass = "";
$connection = "";



try {
    $connection = mysqli_connect($db_hostName, $db_userName, $db_pass, $db_name);
    echo "You are connected to the database!";
} catch (mysqli_sql_exception) {
    echo "Could not connect to database..";
};
