<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"): // Send the email.
        header("Access-Control-Allow-Origin: *");

        // The payload is not sent to $_POST but to php://input as a text
        $json = file_get_contents('php://input');
        // Parse the payload from text format to an object
        $params = json_decode($json);

        // Retrieve data from the request
        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
        $privacyPolicy =  $params->privacyPolicy;

        // Setup email recipient and subject
        $recipient = 'manbayesse@gmail.com';
        $subject = "Contact From <$email>";

        // Escape the message to prevent HTML injection
        $message = htmlspecialchars("From: " . $name . "<br>" . $message);

        // Prepare email headers
        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";

        // Send email and check if it was successful
        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo "Email sent successfully.";
        } else {
            echo "Failed to send email.";
        }
        break;

    default: // Reject any non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
