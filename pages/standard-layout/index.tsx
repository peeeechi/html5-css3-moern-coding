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

        {/* Site Header */}
        <header className={ styles.header }>

          <h1 className={styles.logo}>
            <a href="/standard-layout">SAMPLE SITE</a>
          </h1>

          <nav className={styles["global-nav"]}>
            <ul>
              <li className={classNames(styles["nav-item"], styles["active"])}><a href="#">HOME</a></li>
              <li className={styles["nav-item"]}><a href="#">ABOUT</a></li>
              <li className={styles["nav-item"]}><a href="#">NEWS</a></li>
              <li className={styles["nav-item"]}><a href="#">TOPICS</a></li>
              <li className={styles["nav-item"]}><a href="#">DOCS</a></li>
              <li className={styles["nav-item"]}><a href="#">BLOG</a></li>
            </ul>
          </nav>
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
