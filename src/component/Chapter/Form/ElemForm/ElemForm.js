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
      if (!stateValue[nameInput] && stateValue[nameInput] !== '') {
        setStateValue(nameInput, '');
      }
      comp = (
        <InputText
          input={input}
          nameInput={nameInput}
          valueInput={valueInput}
          stateValue={stateValue}
          setStateValue={setStateValue}
        />
      );
      break;
    case 'email':
      if (!stateValue[nameInput] && stateValue[nameInput] !== '') {
        setStateValue(nameInput, '');
      }
      comp = (
        <InputText
          input={input}
          nameInput={nameInput}
          valueInput={valueInput}
          stateValue={stateValue}
          setStateValue={setStateValue}
        />
      );
      break;
    case 'phone':
      if (!stateValue[nameInput] && stateValue[nameInput] !== '') {
        setStateValue(nameInput, '');
      }
      comp = (
        <InputText
          input={input}
          nameInput={nameInput}
          valueInput={valueInput}
          stateValue={stateValue}
          setStateValue={setStateValue}
        />
      );
      break;
    case 'radio':
      if (!stateValue[name]) {
        setStateValue(name, input.name);
      }
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
