import React from 'react';
import classes from './Steps.module.scss';
function Steps({ step, stepName, selectStep, setSelectStep, visit }) {
  let clsNum = [classes.stepNum];
  let clsStep = [classes.Steps];
  if (selectStep) {
    clsNum.push(classes.selectStep);
  }
  if (visit) {
    clsStep.push(classes.visitStep);
  }
  return (
    <div className={clsStep.join(' ')} onClick={setSelectStep}>
      <div className={clsNum.join(' ')}>{step}</div>
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
