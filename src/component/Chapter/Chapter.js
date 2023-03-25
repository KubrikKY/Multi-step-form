import React from 'react';
import classes from './Chapter.module.scss';
import Form from './Form/Form';

function Chapter(props) {
  const selectData = props.steps[props.currentStep];

  const nextStep = (e) => {
    e.preventDefault();
    props.selectStep(1);
  };

  return (
    <div className={classes.Chapter}>
      <h1>{selectData.title}</h1>
      {!!selectData.description && <p>{selectData.description}</p>}
      <Form
        data={selectData}
        setStateValue={props.setStateValue}
        stateValue={props.stateValue}
        pricesMonth={props.pricesMonth}
        pricesYear={props.pricesYear}
        selectStepReturn={props.selectStepReturn}
        nextStep={nextStep}
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
        {props.currentStep < props.steps.length - 1 && (
          <input
            type="submit"
            form="Form"
            className={classes.nextStep}
            value="Next Step"
          ></input>
        )}
      </div>
    </div>
  );
}

export default Chapter;
