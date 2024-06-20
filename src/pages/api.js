import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import  { Redirect } from 'react-router-dom';


export default function Api() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
       title={`Hello from ${siteConfig.title}`}
       description="Official Documentation for Core DAO/>">
      <main>
      return <Redirect to='/CoreDAO-Docs/docs/api' />;
      </main>
    </Layout>
  );
}
