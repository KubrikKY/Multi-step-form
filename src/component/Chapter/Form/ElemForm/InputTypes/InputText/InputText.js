import React from 'react';
import './InputText.module.scss';

function InputText({ input, nameInput, valueInput }) {
  return (
    <label>
      <span>{input.name}</span>

      <input
        type={input.type}
        placeholder={input.placeholder}
        name={nameInput}
        value={valueInput}
        required
      />
    </label>
  );
}

export default InputText;
