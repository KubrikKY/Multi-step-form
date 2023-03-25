import React from 'react';

import classes from './InputRadio.module.scss';

function InputCheckbox({
  stateValue,
  input,
  pricesMonth,
  pricesYear,
  name,
  valueOptions,
}) {
  let clsRadio = [classes.radioLabel];

  if (valueOptions === input.name) {
    clsRadio.push(classes.checkRadioLabel);
  }
  return (
    <div className={classes.radioButton}>
      <label className={clsRadio.join(' ')}>
        {input.name}
        <span>
          {stateValue.planduration === 'Monthly' ? (
            <span>{`$${pricesMonth[input.name]}/mo`}</span>
          ) : (
            <>
              <span>{`$${pricesYear[input.name]}/yr`}</span>
              <br />
              <span>{pricesYear.sale}</span>
            </>
          )}
        </span>
        {valueOptions === input.value ? (
          <input name={name} type={input.type} value={input.name} checked />
        ) : (
          <input name={name} type={input.type} value={input.name} />
        )}
      </label>
    </div>
  );
}

export default InputCheckbox;
