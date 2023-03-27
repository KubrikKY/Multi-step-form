import React from 'react';
import classes from './Navigation.module.scss';
import Steps from './Steps/Steps';

function Navigation(props) {
  return (
    <div className={classes.Navigation}>
      {props.steps.map((e, i) => {
        return (
          i < props.steps.length - 1 && (
            <Steps
              key={e.step}
              step={e.step}
              stepName={e.name}
              visit={props.visitStep.includes(i) || undefined}
              selectStep={props.currentStep === i || undefined}
              setSelectStep={() => props.setSelectStep(i)}
            />
          )
        );
      })}
    </div>
  );
}

export default Navigation;
