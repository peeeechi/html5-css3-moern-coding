import React from 'react';
import Link from 'next/link';
import SiteLayout from '@/components/site-layout';
// import styles from './index.module.scss';


export default function Index() {

  return (
    <SiteLayout title="site index">

    <style jsx>{`
      div {
        background-color: red;
      }
    `}</style>


      <div className="app">
        <ul>
          <li>
            <Link href="/standard-layout"><a>standard-layout</a></Link>
          </li>
          <li>
            <Link href="/singlepage-layout"><a>singlepage-layout</a></Link>
          </li>
          <li>
            <Link href="#"><a>grid-layout</a></Link>
          </li>
        </ul>
      </div>
    </SiteLayout>
  );
}
