<?php
// Replace with your IONOS email address
$recipient = "blankportalstudio.com";

// Get the email address from the form
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

// Validate the email address
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $subject = "New Newsletter Subscription";
    $message = "A new user has subscribed to the newsletter: $email";
    $headers = "From: noreply@your-domain.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($recipient, $subject, $message, $headers)) {
        echo "success"; // Response sent back to the form
    } else {
        echo "There was an error sending your subscription. Please try again.";
    }
} else {
    echo "Invalid email address. Please enter a valid email.";
}
?>
