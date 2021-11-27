import React from 'react';
import clsx from 'clsx';

import TriangleGroup from '@site/static/img/triangle-group.svg';
import SquarePile from '@site/static/img/square-pile.svg';
import Window from '@site/static/img/window.svg';

import { Feature } from '..';

import classes from './styles.module.css';

const features = [
  {
    icon: <TriangleGroup width={128} height={128} />,
    title: '100% ternary',
    text: 'Meet the trit and learn why 3-valued information units are more optimal than common bits.',
  },
  {
    icon: <SquarePile width={128} height={128} />,
    title: '100% virtual',
    text: 'Execute ternary code easily with Taylor, a virtual ternary processor that runs in your Docker container.',
  },
  {
    icon: <Window width={128} height={128} />,
    title: '100% human',
    text: 'Play with Taylor and Terry on our playground. Just pull the image and have fun!',
  },
];

const Features: React.FC = () => (
  <div className={clsx(classes.container, 'row', 'row--no-gutters')}>
    {features.map(feat => (
      <Feature
        key={feat.title}
        icon={feat.icon}
        title={feat.title}
        text={feat.text}
      />
    ))}
  </div>
);

export { Features };
