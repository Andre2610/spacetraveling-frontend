import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCME } from "../../../Store/weather/CoronalMassInjection/actions";

export default function CoronalMassInjection() {
  const dispatch = useDispatch();

  //CME = coronal Mass Injection - type of spaceWeather
  useEffect(() => {
    dispatch(getCME());
  });

  return (
    <div>
      <h1>SpaceWeather wedge component</h1>
    </div>
  );
}
