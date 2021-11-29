import React from 'react';

import { TeamMember } from '..';

import classes from './styles.module.css';

const AboutUsContent: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1>About us</h1>
      <div className="row">
        <TeamMember
          name="Pedro Henrique"
          tags={['ternary engineer', 'frontend dev', 'mobile dev', 'tester']}
          github="cdias900"
          linkedin="cdias900"
          image={require('@site/static/img/profile-pedro.jpg').default}
        />
        <TeamMember
          name="Thiago Antunes"
          tags={['ternary engineer', 'backend dev', 'designer', 'ui/ux']}
          github="thzoid"
          linkedin="thzoid"
          image={require('@site/static/img/profile-thiago.jpg').default}
        />
      </div>
    </div>
  );
};

export { AboutUsContent };
