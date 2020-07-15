import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@material-ui/core";

export default function Payment() {
  const [product, setProduct] = useState({
    name: "",
    price: 5,
    product: "trip",
  });

  return (
    <>
      <p>I AM THE STRIPE component</p>
      <StripeCheckout stripeKey='' token='' name='Trip Name insert HERE'>
        <Button variant='contained' color='secondary'>
          Book my ticket!
        </Button>
      </StripeCheckout>
    </>
  );
}
