<?php

/**
 * PHP resolves paths relative to the current file.
 * so, to include a file outside of the current file,
 * use the __DIR__ .
 */
require_once __DIR__ . "/../config/db.php";

/**
 * Allowing CORS
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    /**
     * get the required data based on key name, if exist use it,
     * if not use NULL
     */
    $companyName = $_POST['companyName'] ?? null;
    $jobTitle = $_POST['jobTitle'] ?? null;
    $jobURL = $_POST['jobURL'] ?? null;
    $resumeAppliedWith = $_POST['resumeAppliedWith'] ?? null;
    $isCoverLetter = $_POST['isCoverLetter'] ?? null;
    $location = $_POST['location'] ?? null;
    $description = $_POST['description'] ?? null;
    $currentDate = $_POST['currentDate'] ?? null;

    $isCoverLetter = isset($_POST['isCoverLetter']) && $_POST['isCoverLetter'] === '1' ? 1 : 0;


    /**
     * SQL query to insurt form data above later on
     */
    $sql_query = " INSERT INTO postings (company_name, job_title, job_url, resume_applied_with, is_cover_letter, posting_location, posting_description, posting_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    /**
     * Check database connection
     */
    if (!$connection) {
        die("DB connection failed: " . mysqli_connect_error());
    }


    /**
     * Prepare the sql statement for excution
     */
    $stmt = mysqli_prepare($connection, $sql_query);
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["error" => mysqli_error($connection)]);
        exit;
    }

    /**
     * Bind the received data to the prepared SQL statement
     * 
     * FYI- "ssssisss" is a "template" representing the type of each data piece
     */
    mysqli_stmt_bind_param($stmt, "ssssisss", $companyName, $jobTitle, $jobURL, $resumeAppliedWith, $isCoverLetter, $location, $description, $currentDate);


    if (mysqli_stmt_execute($stmt)) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => mysqli_stmt_error($stmt)]);
    }

    /**
     * Close the prepared statement and the connection
     */
    mysqli_stmt_close($stmt);
    mysqli_close($connection);
}
