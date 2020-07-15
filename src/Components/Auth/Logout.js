import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../Store/user/actions";
import { Button } from "@material-ui/core";

export default function Logout() {
  const dispatch = useDispatch();
  return (
    <>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
