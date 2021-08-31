import React from 'react';
import clsx from 'clsx';
import AnimalsImage from '@site/static/img/animals.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { FiExternalLink } from 'react-icons/fi';
import { HiOutlineBookmarkAlt } from 'react-icons/hi';

import IconLink from '../IconLink';

import styles from './styles.module.css';

const HomeHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--2" />
          <div className="col col--5">
            <h1 className={clsx('hero__title', styles.title)}>{siteConfig.title}</h1>
            <p className={clsx('hero__subtitle', styles.subtitle)}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <IconLink to="/docs/intro" text="To the docs" Icon={HiOutlineBookmarkAlt} outline />
              <IconLink to="/docs/intro" text="Get started" Icon={FiExternalLink} />
            </div>
          </div>
          <div className="col col--4">
            <AnimalsImage className={styles.image} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
