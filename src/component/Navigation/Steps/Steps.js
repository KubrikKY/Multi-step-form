import React from 'react';
import classes from './Steps.module.scss';
function Steps({ step, stepName, selectStep, setSelectStep }) {
  let cls = [classes.stepNum];
  if (selectStep) {
    cls.push(classes.selectStep);
  }
  return (
    <div className={classes.Steps} onClick={setSelectStep}>
      <div className={cls.join(' ')}>{step}</div>
      <div className={classes.stepName}>
        <span>
          <h4>STEP {step}</h4>
        </span>
        <h3>{stepName.toUpperCase()}</h3>
      </div>
    </div>
  );
}

export default Steps;
