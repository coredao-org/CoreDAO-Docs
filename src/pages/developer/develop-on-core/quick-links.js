import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Whitepaper() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Official Documentation for Core DAO">
      <head>
        <link rel="canonical" href="https://whitepaper.coredao.org/developer/develop-on-core/quick-links" />
        <meta httpEquiv="refresh" content="0; url=https://whitepaper.coredao.org/developer/develop-on-core/quick-links" />
        <meta charSet="utf-8" />
      </head>
      <main>
        <p>Redirecting to <a href="https://whitepaper.coredao.org/developer/develop-on-core/quick-links">https://whitepaper.coredao.org/developer/develop-on-core/quick-links</a></p>
      </main>
    </Layout>
  );
}
