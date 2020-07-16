import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { URL } from "../../Config/constants";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51H4q6NJAyfM1fq6sEwTl9TPoJMud7gCiokANtJMluBYpWDXaj093V4PAfaABpH1vMki2der1mBFHM1vjRhs8DGUL00JFdEJO1Q"
);

export default function PaymentForm() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
