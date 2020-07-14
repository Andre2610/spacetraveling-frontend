import React, { useEffect } from "react";
import { useDispatch, dispatch, useSelector } from "react-redux";
import { getFLR } from "../../../Store/weather/SolarFlare/actions";
import { selectSolarFlare } from "../../../Store/weather/SolarFlare/selector";

export default function SolarFlares() {
  const dispatch = useDispatch();
  const solarFlare = useSelector(selectSolarFlare);

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
