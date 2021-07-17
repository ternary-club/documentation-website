import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Animals from '@site/static/img/animals.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const HomeHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
          <div className="col col--4">
            <Animals className={styles.image} />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            get started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
