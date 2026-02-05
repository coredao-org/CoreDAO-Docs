import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {Redirect} from '@docusaurus/router';



export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return <Redirect to='/docs/intro' />;
}
