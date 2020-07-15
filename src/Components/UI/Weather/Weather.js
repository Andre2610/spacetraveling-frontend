import React from "react";
import Image from "../../../Images/cme.gif";
import "./Weather.css";
export default function Weather(props) {
  const { startTime, note, sourceLocation, link } = props.objectToShow;
  return (
    <div>
      <img src={Image} style={{ width: "100%" }} />
      <h5>Start Time: </h5>
      <p>{startTime}</p>
      <h5>Source: </h5>
      <p>{sourceLocation}</p>
      <h5>Notes: </h5>
      <p>{note}</p>
      <p>Link</p>
    </div>
  );
}
