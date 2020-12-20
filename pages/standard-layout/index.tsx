import React from 'react';
import Head from 'next/head';
import styles from './standard-layout.module.scss';
import classNames from 'classnames';

export default function StandardLayout() {
  return (

    <>
      <Head>
        <title>standard layout</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="css/reset.css" />
      </Head>

      <div className={styles["standard-layout"]}>
        <header className={ styles.header }>
          header
        </header>

        <div className={ classNames(styles.wrapper, styles.clearfix) }>
          <main className={styles.main}>
            main
          </main>
          <div className={ styles.sidemenu }>
            side
          </div>
        </div>

        <footer className={ styles.footer }>
            footer
        </footer>
      </div>

    </>


  );
}
