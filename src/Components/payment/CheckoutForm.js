import React from "react";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const submithandler = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("paymentMethod", paymentMethod);
    }
  };

  return (
    <form
      onSubmit={submithandler}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2>Price: INSERT_MAPPED_PRICE_HERE</h2>
      <img
        scr='https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
        alt=''
      />
      <CardElement />
      <Button
        variant='contained'
        color='secondary'
        type='submit'
        disabled={!stripe}
      >
        pay
      </Button>
    </form>
  );
}
