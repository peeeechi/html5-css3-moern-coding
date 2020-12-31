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

        {/* コンテンツ部分 */}
        <div className={ classNames(styles.wrapper, styles.clearfix) }>

          {/* 記事領域 */}
          <main className={styles.main}>


            {/* HOT TOPIC */}
            <h2 className={styles.hidden}>HOT TOPIC</h2>

            <a href="#" className={classNames(styles["hot-topic"], styles.clearfix)}>
              <img className={styles.image} src="standard-layout/images/hot-topic.jpg" alt="コーディング画面"/>
              <div className={styles["content"]}>
                <h3 className={styles["title"]}>実務で使えるHTML/CSS<br></br>モダンコーディングTIPS</h3>
                <p className={styles["desc"]}>Webフロントエンドの進化の勢いはとどまるところを知りません。新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用して...</p>

                <time className={styles["date"]} dateTime="2015-09-01">2015.09.15 TUE</time>
              </div>
            </a>

            {/* NEWS(更新履歴) */}
            <h2 className={styles["heading"]}>NEWS</h2>

            <ul className={styles["scroll-list"]}>
              <li className={styles["scroll-item"]}>
                <a href="#">
                  <time className={styles.date} dateTime="2015-08-23">2015.08.23 SUN</time>
                  <span className={classNames(styles["category"], styles["news"])}>NEWS</span>
                  <span className={styles["title"]}>WORKSを更新しました</span>
                </a>
              </li>

              <li className={styles["scroll-item"]}>
                <a href="#">
                  <time className={styles["date"]} dateTime="2018-08-12">2018.08.12 WED</time>
                  <span className={styles["category"]}>TOPIC</span>
                  <span className={styles["title"]}>CSSでここまでできる！？ホントに使えるCSSセレクタ10選！</span>
                </a>
              </li>

              <li className={styles["scroll-item"]}>
                <a href="#">
                  <time className={styles["date"]} dateTime="2015-08-04">2015.08.04 TUE</time>
                  <span className={classNames(styles["category"], styles["news"])}>NEWS</span>
                  <span className={styles["title"]}>TOPICSを更新しました。</span>
                </a>
              </li>
              <li className={styles["scroll-item"]}>
                <a href="#">
                  <time className={styles["date"]} dateTime="2015-07-25">2015.07.25 SAT</time>
                  <span className={styles["category"]}>TOPIC</span>
                  <span className={styles["title"]}>HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</span>
                </a>
              </li>
              <li className={styles["scroll-item"]}>
                <a href="#">
                  <time className={styles["date"]} dateTime="2015-07-09">2015.07.09 THU</time>
                  <span className={styles["category"]}>TOPIC</span>
                  <span className={styles["title"]}>HTML5の新しい属性で手軽にフォームバリデーション</span>
                </a>
              </li>
              <li className={styles["scroll-item"]}>
                <a href="#">
                  <time className={styles["date"]} dateTime="2015-06-30">2015.06.30 TUE</time>
                  <span className={classNames(styles["category"], styles["news"])}>NEWS</span>
                  <span className={styles["title"]}>WORKSを更新しました。</span>
                </a>
              </li>
            </ul>


            <h2 className={styles.hidden}>ARTICLES</h2>
            <div className={styles.articles}>

            </div>
          </main>



          {/* サイドバー */}
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
