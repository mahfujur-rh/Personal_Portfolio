<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $data = "-------------------------\n";
    $data .= "Name: " . $name . "\n";
    $data .= "Email: " . $email . "\n";
    $data .= "Message: " . $message . "\n";
    $data .= "Date: " . date("Y-m-d H:i:s") . "\n";
    $data .= "-------------------------\n\n";

    file_put_contents("messages.txt", $data, FILE_APPEND);

    echo "
    <script>
        alert('Message Sent Successfully!');
        window.location.href='../index.html';
    </script>
    ";
}
?>