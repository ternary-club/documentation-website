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
    <Layout
      title={siteConfig.title}
      description="The toolkit of the future of computing"
    >
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
