import React from 'react';
import classes from './Form.module.scss';
import ElemForm from './ElemForm/ElemForm';
function Form({ stateValue, setStateValue, data }) {
  const formChange = (e) => {
    setStateValue(e.target.name, e.target.value);
  };

  return (
    <form className={classes.Form} onChange={formChange}>
      {data.inputs.map((e, i) => {
        const nameInput = e.name.split(' ')[0].toLowerCase();

        return (
          <ElemForm
            input={e}
            key={i}
            name={data.name}
            nameInput={nameInput}
            value={stateValue[nameInput] ? stateValue[nameInput] : undefined}
          />
        );
      })}
    </form>
  );
}

export default Form;
