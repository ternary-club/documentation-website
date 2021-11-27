import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { HomeHeader } from '../components/HomeHeader';
import { Features } from '../components/Features';
import { LiveDemo } from '../components/LiveDemo';

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
      </main>
    </Layout>
  );
};

export default Home;
