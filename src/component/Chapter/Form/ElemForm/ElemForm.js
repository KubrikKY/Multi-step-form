import React from 'react';
import './ElemForm.module.scss';

import InputText from './InputTypes/InputText/InputText';
import InputRadio from './InputTypes/InputRadio/InputRadio';
import InputCheckbox from './InputTypes/InputCheckbox/InputCheckbox';
import InputSwitchToggle from './InputTypes/InputSwitchToggle/InputSwitchToggle';
import TableResult from './TableResult/TableResult';

function ElemForm({
  valueInput,
  valueOptions,
  input,
  name,
  nameInput,
  pricesMonth,
  pricesYear,
  stateValue,
  setStateValue,
  selectStepReturn,
}) {
  let comp;

  switch (input.type) {
    case 'text':
      comp = (
        <InputText
          input={input}
          nameInput={nameInput}
          valueInput={valueInput}
        />
      );
      break;
    case 'email':
      comp = (
        <InputText
          input={input}
          nameInput={nameInput}
          valueInput={valueInput}
        />
      );
      break;
    case 'phone':
      comp = (
        <InputText
          input={input}
          nameInput={nameInput}
          valueInput={valueInput}
        />
      );
      break;
    case 'radio':
      comp = (
        <InputRadio
          stateValue={stateValue}
          input={input}
          pricesMonth={pricesMonth}
          pricesYear={pricesYear}
          name={name}
          valueOptions={valueOptions}
        />
      );
      break;
    case 'checkbox':
      comp = (
        <InputCheckbox
          stateValue={stateValue}
          input={input}
          pricesMonth={pricesMonth}
          pricesYear={pricesYear}
          name={name}
          valueOptions={valueOptions}
          setStateValue={setStateValue}
        />
      );
      break;
    case 'switchToggle':
      comp = (
        <InputSwitchToggle
          input={input}
          valueInput={valueInput}
          nameInput={nameInput}
          stateValue={stateValue}
          setStateValue={setStateValue}
        />
      );
      break;
    case 'table':
      comp = (
        <TableResult
          selectStepReturn={selectStepReturn}
          input={input}
          stateValue={stateValue}
          pricesMonth={pricesMonth}
          pricesYear={pricesYear}
        />
      );
      break;
    default:
      comp = null;
  }

  return comp;
}

export default ElemForm;
