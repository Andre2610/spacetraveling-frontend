import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCME } from '../../../Store/weather/CoronalMassInjection/actions';
import { selectCoronalMassInjection } from '../../../Store/weather/CoronalMassInjection/selectors';

export default function CoronalMassInjection() {
  const dispatch = useDispatch();
  const cmeReport = useSelector(selectCoronalMassInjection);

  //CME = coronal Mass Injection - type of spaceWeather
  useEffect(() => {
    dispatch(getCME());
  }, []);

  function renderCME() {
    if (!!cmeReport) {
      return (
        <>
          <h3>Coronal Mass Injection (CME)</h3>
          <p>
            {cmeReport.note}
            It was detected at {cmeReport.startTime}.
            <br />
            type: {cmeReport.cmeAnalyses ? cmeReport.cmeAnalyses[0].type : 'loading data'}
          </p>
        </>
      );
    }
    {
      return <p>Loading data . . .</p>;
    }
  }

  return (
    <div>
      <h1>SpaceWeather wedge component</h1>
      {renderCME()}
    </div>
  );
}
