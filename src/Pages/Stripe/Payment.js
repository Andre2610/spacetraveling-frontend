import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@material-ui/core";

export default function Payment() {
  const [product, setProduct] = useState({
    name: "",
    price: 5,
    product: "trip",
  });

  const paymentToken = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-type": "application/json",
    };

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <p>I AM THE STRIPE component</p>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={paymentToken}
        name='Trip Name insert HERE'
        amount={product.price * 100}
      >
        <Button variant='contained' color='secondary'>
          Book my ticket!
        </Button>
      </StripeCheckout>
    </>
  );
}
