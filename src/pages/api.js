import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Api() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Official Documentation for Core DAO">
      <head>
        <link rel="canonical" href="https://whitepaper.coredao.org/api" />
        <meta httpEquiv="refresh" content="0; url=https://whitepaper.coredao.org/api" />
        <meta charSet="utf-8" />
      </head>
      <main>
        <p>Redirecting to <a href="https://whitepaper.coredao.org/api">https://whitepaper.coredao.org/api</a></p>
      </main>
    </Layout>
  );
}
