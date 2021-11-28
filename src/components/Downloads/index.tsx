import React from 'react';
import clsx from 'clsx';

import Taylor from '@site/static/img/taylor.svg';
import Terry from '@site/static/img/terry.svg';
import Download from '@site/static/img/download.svg';
import Github from '@site/static/img/github.svg';

import { IconLink, DockerImage } from '..';

import classes from './styles.module.css';

const Downloads: React.FC = () => {
  return (
    <div className={classes.container} id="downloads">
      <h2>Downloads and images</h2>
      <div className="row">
        <div className={clsx(classes.content, 'col', ' col--5')}>
          <Taylor width="100%" height={200} />
          <h1>Taylor</h1>
          <span>Ternary Virtual Processor</span>
          <div className={classes.buttonsContainer}>
            <IconLink
              to="#downloads"
              text="Download latest version"
              Icon={Download}
            />
            <IconLink
              to="https://github.com/ternary-club/taylor"
              text="Access source code"
              Icon={Github}
              outline
            />
          </div>
        </div>
        <div
          className={clsx(classes.content, 'col', ' col--5', 'col--offset-2')}
        >
          <Terry width="100%" height={200} />
          <h1>Terry</h1>
          <span>Ternary Assembly Language</span>
          <div className={classes.buttonsContainer}>
            <IconLink
              to="#downloads"
              text="Download latest version"
              Icon={Download}
            />
            <IconLink
              to="https://github.com/ternary-club/terryc"
              text="Access source code"
              Icon={Github}
              outline
            />
          </div>
        </div>
      </div>
      <div className={classes.image}>
        <span className={classes.sideLabel}>{'Recomended\nfor beginners'}</span>
        <h1>Coding image</h1>
        <span>Taylor + Terry + Playground, ready to code!</span>
        <DockerImage command="docker run ternaryclub/getting-started 80:80" />
      </div>
      <div className={classes.image} style={{ background: 'transparent' }}>
        <h1>Backend image</h1>
        <span>Taylor and Terry, with automatic updates and no UI</span>
        <DockerImage
          invert
          command="docker run ternaryclub/backend 3333:3333"
        />
      </div>
    </div>
  );
};

export { Downloads };
