import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/user/actions";
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
  // inputText: {
  //   marginBottom: "1rem",
  // },
  dialogFooter: {
    fontSize: "0.8rem",
    width: "100%",
    textAlign: "center",
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const { handleClose, set_modalForm } = props;
  const dispatch = useDispatch();
  const initialState = { email: "", password: "" };
  const [credentials, set_credentials] = useState(initialState);

  function submitForm(event) {
    event.preventDefault();
    dispatch(login(credentials));

    set_credentials(initialState);
  }

  return (
    <DialogContent>
      <TextField
        autoFocus
        // className={classes.inputText}
        value={credentials.email}
        onChange={(event) =>
          set_credentials({
            ...credentials,
            email: event.target.value,
          })
        }
        type="email"
        label="Email address"
        fullWidth
        required
      />
      <TextField
        value={credentials.password}
        // className={classes.inputText}
        onChange={(event) =>
          set_credentials({
            ...credentials,
            password: event.target.value,
          })
        }
        type="password"
        label="Password"
        fullWidth
        required
      />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={submitForm}>
          Log in
        </Button>
      </DialogActions>
      <DialogContentText className={classes.dialogFooter}>
        Don't have an account yet? Sign up{" "}
        <Typography
          component="span"
          onClick={(e) => set_modalForm("Signup")}
          style={{ cursor: "pointer" }}
        >
          HERE
        </Typography>
      </DialogContentText>
    </DialogContent>
  );
}
