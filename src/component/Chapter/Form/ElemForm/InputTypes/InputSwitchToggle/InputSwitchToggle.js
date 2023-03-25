import React from 'react';
import classes from './InputSwitchToggle.module.scss';

function InputSwitchToggle({
  input,
  valueInput,
  nameInput,
  stateValue,
  setStateValue,
}) {
  const clsSwitch = [classes.slider, classes.round];
  if (!stateValue[nameInput]) {
    setStateValue(nameInput, input.options[0]);
  }
  return (
    <div className={classes.CheckBoxContainer}>
      <label className={classes.switch}>
        {input.options.indexOf(valueInput) === 1 ? (
          <input
            type={input.typeName}
            name={nameInput}
            value={input.options[0]}
            checked
          />
        ) : (
          <input
            type={input.typeName}
            name={nameInput}
            value={input.options[1]}
          />
        )}
        <span className={clsSwitch.join(' ')}>
          <div className={classes.Selector}>
            <p>{input.options[0]}</p>
          </div>
          <div className={classes.Selector}>
            <p>{input.options[1]}</p>
          </div>
        </span>
      </label>
    </div>
  );
}

export default InputSwitchToggle;
