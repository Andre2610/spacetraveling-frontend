import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  dialogFooter: {
    fontSize: "0.8rem",
    width: "100%",
    textAlign: "center",
  },
}));

export default function FormDialog(props) {
  const classes = useStyles();
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
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Book your trip!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Pay with card</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <DialogContentText>Card information</DialogContentText>
          <CardElement />
          <TextField label="Name on card" fullWidth />
          <TextField
            id="cardholderName"
            label="Card information"
            fullWidth
            value={cardholder}
            onChange={(e) => setCardholder(e.target.value)}
          />
          <DialogContentText>Country or region</DialogContentText>
          <NativeSelect id="select">
            <option value="netherlands">Netherlands</option>
            <option value="france"> France</option>
            <option value="Germany">Germany</option>
            <option value="Portugal">Portugal</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
          </NativeSelect>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            color="primary"
            onClick={submithandler}
          >
            Buy ticket
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
