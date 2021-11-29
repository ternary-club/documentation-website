import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {
  HomeHeader,
  Features,
  LiveDemo,
  Tutorial,
  Downloads,
} from '../components';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomeHeader />
      <main>
        <Features />
        <LiveDemo />
        <Tutorial />
        <Downloads />
      </main>
    </Layout>
  );
};

export default Home;
