import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import  { Redirect } from 'react-router-dom';

export default function Home() {
  return <Redirect to='/docs/intro' />;
