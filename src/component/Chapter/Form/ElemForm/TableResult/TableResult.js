import React from 'react';
import classes from './TableResult.module.scss';

function TableResult({
  input,
  stateValue,
  pricesMonth,
  pricesYear,
  selectStepReturn,
}) {
  return (
    <div>
      <div className={classes.tableResult}>
        <div className={classes.planResult}>
          <div>
            <h2>
              {input.options[0]} ({input.options[2]})
            </h2>
            <button onClick={() => selectStepReturn(1)}>Change</button>
          </div>

          {stateValue.planduration === 'Monthly' ? (
            <p>${pricesMonth[input.options[0]]}/mo</p>
          ) : (
            <p>${pricesYear[input.options[0]]}/yr</p>
          )}
        </div>
        <div className={classes.columnAdd}>
          {!!input.options[1] &&
            input.options[1].map((e) => {
              return (
                <div className={classes.addResult}>
                  <h3>{e}</h3>
                  {stateValue.planduration === 'Monthly' ? (
                    <p>+${pricesMonth[e]}/mo</p>
                  ) : (
                    <p>+${pricesYear[e]}/yr</p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <div className={classes.totalResult}>
        <h2>Total (per-month)</h2>
        <span>
          +$
          {stateValue.planduration === 'Monthly'
            ? +pricesMonth[input.options[0]] +
              input.options[1].reduce((a, e) => a + +pricesMonth[e], 0) +
              '/mo'
            : +pricesYear[input.options[0]] +
              input.options[1].reduce((a, e) => a + +pricesYear[e], 0) +
              '/yr'}
        </span>
      </div>
    </div>
  );
}

export default TableResult;
