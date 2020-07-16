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
  const [planetID, setPlanetID] = useState("");
  const [price, setPrice] = useState("");
  const [departingDate, setDepartingDate] = useState("");
  console.log("WHAT ARE MY DIALOG WORKING PROPS?", tripData);
  console.log("WORKING?", planetID);
  setPlanetID(tripData.planetId);

  //stripe
  const stripe = useStripe();
  const elements = useElements();

  //stripe form & call
  const submithandler = async (event) => {
    event.preventDefault();
    const amount = 20000;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      const data = axios.post(`${URL}/checkout`, { id, amount });
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
    <form onSubmit={submithandler}>
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
          <Button onClick={handleClose} color='primary' type='submit'>
            Buy ticket
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
