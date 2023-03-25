import React from 'react';
import classes from './InputCheckbox.module.scss';

function InputCheckbox({
  stateValue,
  input,
  pricesMonth,
  pricesYear,
  name,
  valueOptions,
  setStateValue,
}) {
  if (!stateValue[name]) {
    setStateValue(name, []);
    return;
  }

  let clsCheckbox = [classes.checkbox];

  if (valueOptions.includes(input.name)) {
    clsCheckbox.push(classes.checkCheckbox);
  }

  return (
    <div>
      <label className={clsCheckbox.join(' ')}>
        <div className={classes.checkboxDisc}>
          {valueOptions.includes(input.name) ? (
            <input name={name} type={input.type} value={input.name} checked />
          ) : (
            <input name={name} type={input.type} value={input.name} />
          )}
          <div>
            <span>{input.name}</span>
            <p>{input.description}</p>
          </div>
        </div>

        {stateValue.planduration === 'Monthly' ? (
          <span>{`$${pricesMonth[input.name]}/mo`}</span>
        ) : (
          <>
            <span>{`$${pricesYear[input.name]}/yr`}</span>
          </>
        )}
      </label>
    </div>
  );
}

export default InputCheckbox;
