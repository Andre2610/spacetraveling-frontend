import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../Store/user/actions";
import { Button, Typography } from "@material-ui/core";

export default function Logout(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Typography>Hello, {props.user.firstName} </Typography>
      <Button color="inherit" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
