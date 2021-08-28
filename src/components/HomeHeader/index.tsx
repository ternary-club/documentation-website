import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Animals from '@site/static/img/animals.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

const HomeHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className={clsx('hero__title', styles.title)}>{siteConfig.title}</h1>
            <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
          </div>
          <div className="col col--4">
            <Animals className={styles.image} />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--outline button--lg"
            to="/docs/intro"
          >
            To the docs
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
