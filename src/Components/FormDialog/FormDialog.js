import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { NativeSelect } from "@material-ui/core";

//stripe
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { URL } from "../../Config/constants";

export default function FormDialog(props) {
  const { tripData } = props;
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [cardholder, setCardholder] = useState("");

  let tripId = tripData.id;
  let departingDate = tripData.departingDate;
  let planetId = tripData.planetId;
  let amount = tripData.price * 100;

  //stripe
  const stripe = useStripe();
  const elements = useElements();

  //stripe form & call
  const submithandler = async (event) => {
    event.preventDefault();

    console.log("Amount", amount);
    console.log("Email", email);
    console.log("cardholder", cardholder);
    console.log("tripID", tripId);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      const data = axios.post(`${URL}/checkout`, {
        id,
        amount,
        tripId,
        departingDate,
        planetId,
        email,
        cardholder,
      });
      return data;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Book your trip!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Pay with card</DialogTitle>
        <DialogContent>
          <DialogContentText>email</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>Card information</DialogContentText>
          <CardElement />
        </DialogContent>

        <DialogContent>
          <DialogContentText>name on card</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='cardholderName'
            label='card information'
            fullWidth
            value={cardholder}
            onChange={(e) => setCardholder(e.target.value)}
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>country or region</DialogContentText>
          <NativeSelect id='select'>
            <option value='netherlands'>Netherlands</option>
            <option value='france'> France</option>
            <option value='Germany'>Germany</option>
            <option value='Portugal'>Portugal</option>
            <option value='Spain'>Spain</option>
            <option value='Italy'>Italy</option>
            <option value='Romania'>Romania</option>
            <option value='Russia'>Russia</option>
            <option value='USA'>USA</option>
          </NativeSelect>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary' onClick={submithandler}>
            Buy ticket
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
