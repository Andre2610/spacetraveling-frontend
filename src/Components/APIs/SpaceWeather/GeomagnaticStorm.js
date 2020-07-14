import React, { useEffect } from "react";
import { useDispatch, dispatch, useSelector } from "react-redux";
import { getGST } from "../../../Store/weather/GeomagnaticStorm/actions";

export default function SolarFlares() {
  const dispatch = useDispatch();

  // GST = Solar Flare - type of space weather
  useEffect(() => {
    dispatch(getGST());
  }, []);
  return (
    <div>
      <h3>Geomagnatic Storm</h3>
    </div>
  );
}
