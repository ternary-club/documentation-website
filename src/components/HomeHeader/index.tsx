import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import AnimalsImage from '@site/static/img/animals.svg';
import Docs from '@site/static/img/docs.svg';
import Share from '@site/static/img/share.svg';
import LogoLightest from '@site/static/img/logo-lightest.svg';

import { IconLink } from '..';

import classes from './styles.module.css';

const HomeHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', classes.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx(classes.titleContainer, 'col', 'col--7')}>
            <h1 className={clsx('hero__title', classes.title)}>
              <LogoLightest className={classes.backgroundLogo} />
              <span>{siteConfig.title}</span>
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
          <div className="col col--5">
            <AnimalsImage className={classes.animalsImage} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { HomeHeader };
