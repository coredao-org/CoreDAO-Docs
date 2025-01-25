import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import  { Redirect } from 'react-router-dom';


// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//        title={`Hello from ${siteConfig.title}`}
//        description="Official Documentation for Core DAO/>">
//       <main>
//       return <Redirect to='/docs/intro' />;
//       </main>
//     </Layout>
//   );
// }

export default function Home() {
  return <Redirect to='/docs/intro' />;
}