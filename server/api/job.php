<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $companyName = $_POST['companyName'];
    $jobTitle = $_POST['jobTitle'];
    $jobURL = $_POST['jobURL'];
    $resumeAppliedWith = $_POST['resumeAppliedWith'];
    $isCoverLetter = $_POST['isCoverLetter'];
    $location = $_POST['location'];
    $description = $_POST['description'];
    $currentDate = $_POST['currentDate'];


    echo $companyName . $jobTitle . $jobURL . $resumeAppliedWith . $isCoverLetter . $location . $description . $currentDate;
}
