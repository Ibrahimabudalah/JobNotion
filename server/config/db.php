<?php

/**
 * Declare the database info
 */
$db_userName = "root";
$db_hostName = "localhost";
$db_name = "JobNotion";
$db_pass = "";


/**
 * Try connectiong to the database,
 * if there are any errors log them
 */
try {
    $connection = mysqli_connect($db_hostName, $db_userName, $db_pass, $db_name);
} catch (mysqli_sql_exception) {
    echo "Could not connect to database..";
};
