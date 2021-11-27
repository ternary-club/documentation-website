import React from 'react';

import classes from './styles.module.css';

const LiveDemo: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.content}>
      <h1>Live Demo</h1>
      <div className="row">
        <div className={classes.code} />
        <button className={classes.button}>&gt;</button>
        <div className={classes.code} />
      </div>
    </div>
  </div>
);

export { LiveDemo };
