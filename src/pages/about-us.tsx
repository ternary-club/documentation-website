import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AboutUs: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - About us`}
      description="Description will go into a meta tag in <head />"
    >
      <div>About us</div>
    </Layout>
  );
};

export default AboutUs;
