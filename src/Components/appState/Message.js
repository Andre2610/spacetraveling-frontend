import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../Store/appState/selector";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { clearMessage } from "../../Store/appState/actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  console.log("do I get gere?", message);
  if (!showMessage) return null;

  return (
    <Snackbar
      open={showMessage}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      <Alert
        onClose={() => dispatch(clearMessage())}
        severity={message.variant}
      >
        {message.text}
      </Alert>
    </Snackbar>
  );
}
