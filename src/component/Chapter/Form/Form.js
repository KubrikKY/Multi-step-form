import React from 'react';
import classes from './Form.module.scss';
import ElemForm from './ElemForm/ElemForm';
function Form({
  stateValue,
  setStateValue,
  data,
  pricesMonth,
  pricesYear,
  selectStepReturn,
  nextStep,
}) {
  const addCheckBoxInState = (checkbox) => {
    if (
      stateValue[checkbox.name] &&
      stateValue[checkbox.name].includes(checkbox.value)
    ) {
      let newArr = [...stateValue[checkbox.name]];
      newArr.splice(newArr.indexOf(checkbox.value), 1);
      setStateValue(checkbox.name, [...newArr]);
      return;
    }
    setStateValue(checkbox.name, [
      ...stateValue[checkbox.name],
      checkbox.value,
    ]);
  };

  const onInputEmail = (input) => {
    if (isEmailValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  };

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const isEmailValid = (value) => {
    return EMAIL_REGEXP.test(value);
  };

  const formChange = (e) => {
    if (e.target.type === 'checkbox' && e.target.name !== 'planduration') {
      addCheckBoxInState(e.target);
      return;
    }

    switch (e.target.type) {
      case 'text':
        break;
      case 'email':
        onInputEmail(e.target);
        break;
      case 'phone':
        break;
      default:
    }
    setStateValue(e.target.name, e.target.value);
  };

  const nameOptionsInput = data.name
    .split(' ')
    .map((e, i) =>
      i === 0 ? e.toLowerCase() : e[0].toUpperCase() + e.slice(1)
    )
    .join('');

  return (
    <form
      className={classes.Form}
      onChange={formChange}
      id="Form"
      onSubmit={nextStep}
    >
      <div>
        {data.inputs.map((e, i) => {
          const nameInput = e.name.split(' ')[0].toLowerCase();

          return (
            <ElemForm
              input={e}
              key={i}
              name={nameOptionsInput}
              nameInput={nameInput}
              selectStepReturn={selectStepReturn}
              valueInput={stateValue[nameInput]}
              valueOptions={
                stateValue[nameOptionsInput]
                  ? stateValue[nameOptionsInput]
                  : undefined
              }
              setStateValue={setStateValue}
              stateValue={stateValue}
              pricesMonth={pricesMonth}
              pricesYear={pricesYear}
            />
          );
        })}
      </div>
    </form>
  );
}

export default Form;
