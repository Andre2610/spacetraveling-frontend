import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Store/user/actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

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

export default function SingUp(props) {
  const classes = useStyles();
  const { handleClose, set_modalForm } = props;
  const dispatch = useDispatch();
  const initialState = { firstName: "", lastName: "", email: "", password: "" };
  const [signUpcredentials, set_signUpcredentials] = useState(initialState);

  function submitForm(event) {
    event.preventDefault();
    dispatch(signUp(signUpcredentials));

    set_signUpcredentials(initialState);
  }

  return (
    <DialogContent>
      <TextField
        value={signUpcredentials.firstName}
        onChange={(event) =>
          set_signUpcredentials({
            ...signUpcredentials,
            firstName: event.target.value,
          })
        }
        type='text'
        autoFocus
        label='First name'
        fullWidth
        required
      />
      <TextField
        value={signUpcredentials.lastName}
        onChange={(event) =>
          set_signUpcredentials({
            ...signUpcredentials,
            lastName: event.target.value,
          })
        }
        type='text'
        label='Last name'
        fullWidth
        required
      />
      <TextField
        value={signUpcredentials.email}
        onChange={(event) =>
          set_signUpcredentials({
            ...signUpcredentials,
            email: event.target.value,
          })
        }
        type='email'
        label='Email address'
        fullWidth
        required
      />
      <TextField
        value={signUpcredentials.password}
        onChange={(event) =>
          set_signUpcredentials({
            ...signUpcredentials,
            password: event.target.value,
          })
        }
        type='password'
        label='Password'
        fullWidth
        required
      />
      <DialogActions>
        <Button variant='contained' color='primary' onClick={submitForm}>
          Log in
        </Button>
      </DialogActions>
      <DialogContentText className={classes.dialogFooter}>
        already have an account? Login{" "}
        <Typography
          component='span'
          onClick={(e) => set_modalForm("Login")}
          style={{ cursor: "pointer" }}
          color='blue.500'
        >
          HERE
        </Typography>
      </DialogContentText>
    </DialogContent>
  );
}
