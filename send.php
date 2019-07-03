<?php
  echo "php has executed";
  $email = $_POST['email'];
  mail($email, "Test", "Test", "From:info@theboomba.com");
  echo "mail has been sent"
?>
