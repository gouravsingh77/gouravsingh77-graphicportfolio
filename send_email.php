<?php
    // Replace with your email settings
    $to = "workwithtomkyal@gmail.com";  // Your email address
    $from = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $subject = "Message from your website";

    $body = "Name: " . $name . "\n\nEmail: " . $from . "\n\nMessage:\n" . $message;

    $headers = "From: " . $from;

    // Use mail() function to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!"; // Send a success message back to the client
    } else {
        echo "Error sending email!";    // Or handle the error more gracefully
    }
?>