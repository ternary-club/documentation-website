import React from 'react';

import { TeamMember } from '..';

import classes from './styles.module.css';

const AboutUs: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1>About us</h1>
      <div className="row">
        <TeamMember
          name="Pedro Henrique"
          tags={['ternary engineer', 'frontend dev', 'mobile dev', 'tester']}
          github="cdias900"
          linkedin="cdias900"
          image="/static/img/profile-pedro.jpg"
        />
        <TeamMember
          name="Thiago Antunes"
          tags={['ternary engineer', 'backend dev', 'designer', 'ui/ux']}
          github="thzoid"
          linkedin="thzoid"
          image="/static/img/profile-thiago.jpg"
        />
      </div>
    </div>
  );
};

export { AboutUs };
