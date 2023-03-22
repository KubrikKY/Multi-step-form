import React from 'react';
import classes from './ElemForm.module.scss';

function ElemForm({ value, input, name, nameInput }) {
  let comp;
  switch (input.type) {
    case 'text':
      comp = (
        <label>
          <span>{input.name}</span>

          <input
            type={input.type}
            placeholder={input.placeholder}
            name={nameInput}
            value={value}
          />
        </label>
      );
      break;
    case 'email':
      comp = (
        <label>
          <span>{input.name}</span>

          <input
            type={input.type}
            placeholder={input.placeholder}
            name={nameInput}
          />
        </label>
      );
      break;
    case 'phone':
      comp = (
        <label>
          <span>{input.name}</span>

          <input
            type={input.type}
            placeholder={input.placeholder}
            name={nameInput}
          />
        </label>
      );
      break;
    case 'radio':
      comp = (
        <label className={classes.radio}>
          {input.name}
          <span>{input.price}</span>
          <input name={name} type={input.type} value={input.value} />
        </label>
      );
      break;
    case 'checkbox':
      comp = (
        <label>
          {input.name}

          <input
            type={input.type}
            name={nameInput}
            value={input.value ? input.value : undefined}
          />
        </label>
      );
      break;
    case 'switchToggle':
      comp = (
        <label>
          <input
            type={input.type}
            value={input.value ? input.value : undefined}
            name={nameInput}
          />
        </label>
      );
      break;
    default:
      comp = null;
  }

  return comp;
}

export default ElemForm;
