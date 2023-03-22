import React from 'react';
import classes from './Form.module.scss';
import ElemForm from './ElemForm/ElemForm';
function Form({ stateValue, setStateValue, data, prices }) {
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
    if (!stateValue[checkbox.name]) {
      setStateValue(checkbox.name, [checkbox.value]);
      return;
    }
    setStateValue(checkbox.name, [
      ...stateValue[checkbox.name],
      checkbox.value,
    ]);
  };

  const formChange = (e) => {
    if (e.target.type === 'checkbox' && e.target.name !== 'planduration') {
      addCheckBoxInState(e.target);
      return;
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
    <form className={classes.Form} onChange={formChange}>
      <div>
        {data.inputs.map((e, i) => {
          const nameInput = e.name.split(' ')[0].toLowerCase();

          return (
            <ElemForm
              input={e}
              key={i}
              name={nameOptionsInput}
              nameInput={nameInput}
              valueInput={
                stateValue[nameInput] ? stateValue[nameInput] : undefined
              }
              valueOptions={
                stateValue[nameOptionsInput]
                  ? stateValue[nameOptionsInput]
                  : undefined
              }
              prices={prices}
            />
          );
        })}
      </div>
    </form>
  );
}

export default Form;
