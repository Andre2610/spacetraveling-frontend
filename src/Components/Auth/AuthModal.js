import React, { useState } from "react";
import { Modal, Button } from "@material-ui/core";
import Login from "./Login";
import Signup from "./SignUp";

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const [modalForm, set_modalForm] = useState("Login");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="auth-modal-login-signup"
        aria-describedby="auth-modal-login-signup"
      >
        {modalForm === "Login" ? (
          <Login handleClose={handleClose} set_modalForm={set_modalForm} />
        ) : (
          <Signup handleClose={handleClose} set_modalForm={set_modalForm} />
        )}
      </Modal>
    </div>
  );
}
