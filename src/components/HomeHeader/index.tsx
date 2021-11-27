import React from 'react';
import clsx from 'clsx';
import AnimalsImage from '@site/static/img/animals.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Docs from '@site/static/img/docs.svg';
import Share from '@site/static/img/share.svg';

import { IconLink } from '..';

import classes from './styles.module.css';

const HomeHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', classes.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--2" />
          <div className="col col--5">
            <h1 className={clsx('hero__title', classes.title)}>
              {siteConfig.title}
            </h1>
            <p className={clsx('hero__subtitle', classes.subtitle)}>
              {siteConfig.tagline}
            </p>
            <div className={classes.buttons}>
              <IconLink
                to="/docs/intro"
                text="To the docs"
                Icon={Docs}
                outline
              />
              <IconLink to="/docs/intro" text="Get started" Icon={Share} />
            </div>
          </div>
          <div className="col col--4">
            <AnimalsImage className={classes.image} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { HomeHeader };
