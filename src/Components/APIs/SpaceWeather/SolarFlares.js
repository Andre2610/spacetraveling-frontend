import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SolarFlares() {
  const dispatch = useDispatch();

  // FLR = Solar Flare - type of space weather
  useEffect(() => {
    dispatch(getFLR());
  });

  return (
    <div>
      <h3>Solar Flares</h3>
    </div>
  );
}
