import React from 'react';
import classes from './Chapter.module.scss';
import Form from './Form/Form';

function Chapter(props) {
  const selectData = props.steps[props.currentStep];
  return (
    <div className={classes.Chapter}>
      <h1>{selectData.title}</h1>
      {!!selectData.description && <p>{selectData.description}</p>}
      <Form
        data={selectData}
        setStateValue={props.setStateValue}
        stateValue={props.stateValue}
      />
      <div className={classes.navButtons}>
        {props.currentStep !== 0 && (
          <button
            onClick={() => props.selectStep(-1)}
            className={classes.goBack}
          >
            Go Back
          </button>
        )}
        {props.currentStep < props.steps.length && (
          <button
            onClick={() => props.selectStep(1)}
            className={classes.nextStep}
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}

export default Chapter;
