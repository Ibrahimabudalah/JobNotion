<?php

require_once __DIR__ . "/../config/db.php";
require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

// Load .env
$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

$tableName = $_ENV["USER_SCHEMA_NAME"];

if (!$connection) {
    die("Could not connect to db");
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $sql_statement = "INSERT INTO $tableName (email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?)";

    try {
        $stmt = mysqli_prepare($connection, $sql_statement);
        if (!$stmt) {
            http_response_code(500);
            echo json_encode(["error" => mysqli_error($connection)]);
            exit;
        }

        if ($firstName && $lastName && $email && $hashedPassword) {
            mysqli_stmt_bind_param($stmt, "ssss", $email, $hashedPassword, $firstName, $lastName);
            if (mysqli_stmt_execute($stmt)) {
                echo json_encode(["success" => true]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["Error" => "Complete entire form"]);
        }
    } catch (mysqli_sql_exception $e) {

        // mysql duplicate email error code
        if ($e->getCode() === 1062) {
            http_response_code(409);
            echo json_encode([
                "error" => "Email already exists"
            ]);
            exit;
        }

        http_response_code(500);
        echo json_encode([
            "error" => "Server error"
        ]);
        exit;
    }



    mysqli_stmt_close($stmt);
    mysqli_close($connection);
}
