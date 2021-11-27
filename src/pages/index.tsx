import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { HomeHeader, Features, LiveDemo, Tutorial } from '../components';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomeHeader />
      <main>
        <Features />
        <LiveDemo />
        <Tutorial />
      </main>
    </Layout>
  );
};

export default Home;
