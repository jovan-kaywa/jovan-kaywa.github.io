<?php
require_once('stripe-php/init.php');
\Stripe\Stripe::setApiKey("sk_test_wumBov0otTDX5QX3zczBD0gf");;
// Get the credit card details submitted by the form
$token = $_POST['stripeToken'];

// Create the charge on Stripe's servers - this will charge the user's card
try {
$customer = \Stripe\Customer::create(array(
  "source" => $token,
  "plan" => "gold",
  "email" => "react@rullz.com")
);
echo "bravo!";
} catch(\Stripe\Error\Card $e) {
  // The card has been declined
	echo "jebiga";
}

?>