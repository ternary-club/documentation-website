import React from 'react';
import clsx from 'clsx';

import classes from './styles.module.css';

interface IFeatureProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

const Feature: React.FC<IFeatureProps> = ({ icon, title, text }) => (
  <div className={clsx(classes.container, 'col', 'col--4')}>
    <div className={classes.iconContainer}>{icon}</div>
    <div className={classes.textContainer}>
      <span className={classes.title}>{title}</span>
      <span className={classes.text}>{text}</span>
    </div>
  </div>
);

export { Feature };
