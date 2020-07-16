import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../Store/user/actions";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    marginLeft: "1vw",
    fontWeight: "bold",
    color: "#aa0d00",
    backgroundColor: "#ffffff",
    onHover: "#212121",
  },
}));

export default function Logout(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Typography>Hello, {props.user.firstName} </Typography>
      <Button className={classes.btn} onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
