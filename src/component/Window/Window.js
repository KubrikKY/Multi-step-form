import React from 'react';

import classes from './Window.module.scss';

function Window(props) {
  return <div className={classes.Window}>{props.children}</div>;
}

export default Window;
