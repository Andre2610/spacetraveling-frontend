import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";
import Signup from "./SignUp";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}));

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [modalForm, set_modalForm] = useState("Login");
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = modalForm === "Login" ? "Login" : "Sign up";
  const formToDisplay =
    modalForm === "Login" ? (
      <Login handleClose={handleClose} set_modalForm={set_modalForm} />
    ) : (
      <Signup handleClose={handleClose} set_modalForm={set_modalForm} />
    );
  return (
    <Paper>
      <Button color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        aria-labelledby="auth-modal-login-signup"
        aria-describedby="auth-modal-login-signup"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        {formToDisplay}
      </Dialog>
    </Paper>
  );
}
