import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

//stripe
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { URL } from "../../Config/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
  },
  dialogTextArea: {
    marginBottom: "0.7rem",
  },
  bookbutton: {
    marginTop: "1vh",
    float: "right",
  },
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const { tripData, userData } = props;
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [travelClass, setTravelClass] = useState("");

  const tripId = tripData.id;
  const departingDate = tripData.departingDate;
  const planetName = tripData.name;
  const amount = tripData.price * 100;

  const userId = userData.id;

  //stripe
  const stripe = useStripe();
  const elements = useElements();

  //stripe form & call
  const submithandler = async (event) => {
    event.preventDefault();

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
        planetName,
        email,
        cardholder,
        userId,
        travelClass,
      });
      return data && handleClose();
    }
  };

  // console.log("TRIPDATA", tripData);
  // console.log("WHO DIS BITCH", userData);

  const handleClickOpen = () => {
    // console.log("got here?");
    // console.log("whats here", tripData);
    if (!tripData.id) {
      return;
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setEmail("");
    setCardholder("");
    setOpen(false);
  };

  console.log("VALUE1", travelClass);

  return (
    <>
      <Button
        className={classes.bookbutton}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Book your trip!
      </Button>
      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Pay with card</DialogTitle>
        <DialogContent className={classes.root}>
          <TextField
            autoFocus
            className={classes.dialogTextArea}
            id="email"
            label="Email address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.dialogTextArea}
            id="name"
            type="text"
            label="Name on card"
            fullWidth
            value={cardholder}
            onChange={(e) => setCardholder(e.target.value)}
          />
          <RadioGroup
            defaultValue="Economy Class"
            label="Travel Class"
            name="customized-radios"
            onChange={(e) => setTravelClass(e.target.value)}
          >
            <FormControlLabel
              value="Economy Class"
              control={<Radio />}
              label="Economy Class"
            />
            <FormControlLabel
              value="Business Class"
              control={<Radio />}
              label="Business Class"
            />
            <FormControlLabel
              value="First Class"
              control={<Radio />}
              label="First Class"
            />
          </RadioGroup>
          <DialogContentText className={classes.dialogTextArea}>
            Card information
          </DialogContentText>
          <CardElement className={classes.dialogTextArea} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={submithandler}>
            Buy ticket
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
