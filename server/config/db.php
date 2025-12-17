<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

// Load .env
$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();


/**
 * Try connectiong to the database,
 * if there are any errors log them
 */
try {
    $connection = mysqli_connect(
        $_ENV['DB_HOSTNAME'],
        $_ENV['DB_USERNAME'],
        $_ENV['DB_PASS'],
        $_ENV['DB_NAME']
    );
} catch (mysqli_sql_exception) {
    echo "Could not connect to database..";
};
