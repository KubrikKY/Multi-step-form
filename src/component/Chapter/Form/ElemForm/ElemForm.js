import React from 'react';
import classes from './ElemForm.module.scss';

function ElemForm({
  valueInput,
  valueOptions,
  input,
  name,
  nameInput,
  prices,
}) {
  let comp;

  let clsRadio = [classes.radioLabel];

  if (valueOptions === input.value) {
    clsRadio.push(classes.checkRadioLabel);
  }

  switch (input.type) {
    case 'text':
      comp = (
        <label>
          <span>{input.name}</span>

          <input
            type={input.type}
            placeholder={input.placeholder}
            name={nameInput}
            value={valueInput}
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
            value={valueInput}
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
            value={valueInput}
          />
        </label>
      );
      break;
    case 'radio':
      comp = (
        <div className={classes.radioButton}>
          <label className={clsRadio.join(' ')}>
            {input.name}
            <span>{input.price}</span>
            {valueOptions === input.value ? (
              <input name={name} type={input.type} value={input.name} checked />
            ) : (
              <input name={name} type={input.type} value={input.name} />
            )}
          </label>
        </div>
      );
      break;
    case 'checkbox':
      comp = (
        <label>
          {input.name}

          <input
            type={input.type}
            name={name}
            // value={input.value ? input.value : undefined}
            value={input.name}
          />
        </label>
      );
      break;
    case 'switchToggle':
      comp = (
        <label>
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
        </label>
      );
      break;
    case 'table':
      comp = (
        <div>
          <div className={classes.tableResult}>
            <div className={classes.planResult}>
              <h2>
                {input.options[0]} ({input.options[2]})
              </h2>
              <p>${prices[input.options[0]]}/mo</p>
            </div>
            <div className={classes.columnAdd}>
              {!!input.options[1] &&
                input.options[1].map((e) => {
                  return (
                    <div className={classes.addResult}>
                      <h3>{e}</h3>
                      <p>+${prices[e]}/mo</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={classes.totalResult}>
            <h2>Total (per-month)</h2>
            <span>
              {+prices[input.options[0]] +
                input.options[1].reduce((a, e) => a + +prices[e], 0)}
            </span>
          </div>
        </div>
      );
      break;
    default:
      comp = null;
  }

  return comp;
}

export default ElemForm;
