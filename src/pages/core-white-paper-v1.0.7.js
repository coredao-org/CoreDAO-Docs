import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Whitepaper() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Official Documentation for Core DAO">
      <head>
        <link rel="canonical" href="https://whitepaper.coredao.org/" />
        <meta httpEquiv="refresh" content="0; url=https://whitepaper.coredao.org/" />
        <meta charSet="utf-8" />
      </head>
      <main>
        <p>Redirecting to <a href="https://whitepaper.coredao.org/">https://whitepaper.coredao.org/</a></p>
      </main>
    </Layout>
  );
}
