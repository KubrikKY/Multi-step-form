import React from 'react';
import classes from './Navigation.module.scss';
import Steps from './Steps/Steps';

function Navigation(props) {
  return (
    <div className={classes.Navigation}>
      {props.steps.map((e, i) => {
        return (
          <Steps
            key={e.step}
            step={e.step}
            stepName={e.name}
            setSelectStep={() => props.setSelectStep(i)}
          />
        );
      })}
    </div>
  );
}

export default Navigation;
