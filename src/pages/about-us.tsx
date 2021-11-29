import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { AboutUsContent } from '../components';

const AboutUs: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="About us" description={siteConfig.tagline}>
      <AboutUsContent />
    </Layout>
  );
};

export default AboutUs;
