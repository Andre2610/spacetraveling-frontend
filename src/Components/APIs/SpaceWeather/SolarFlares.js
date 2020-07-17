import React, { useEffect } from "react";
import { useDispatch, dispatch, useSelector } from "react-redux";
import { getFLR } from "../../../Store/weather/SolarFlare/actions";
import { selectSolarFlare } from "../../../Store/weather/SolarFlare/selector";

export default function SolarFlares() {
  const dispatch = useDispatch();
  const solarFlare = useSelector(selectSolarFlare);

  function renderSolarFlare() {
    if (!solarFlare) {
      return <p>No Solar Flares were sighted in the last 30 days</p>;
    }
    {
      return (
        <>
          <p>
            A class {solarFlare.classType} solar flare has been recorded in our
            solar system.
          </p>
          <p>
            Its begintime was: {solarFlare.beginTime} and it peaked at:{" "}
            {solarFlare.peakTime}
          </p>
        </>
      );
    }
  }

  // FLR = Solar Flare - type of space weather
  useEffect(() => {
    dispatch(getFLR());
  }, []);
  return (
    <div>
      <h3>Solar Flares</h3>
      {renderSolarFlare()}
    </div>
  );
}
