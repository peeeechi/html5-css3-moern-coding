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
        <link rel="stylesheet" href="/standard-layout/css/reset.css" />
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
            <div className={styles["clearfix"]}>

                <a href="#" className={styles["articles-box"]}>
                  <h3 className={styles["title"]}>実務で支えるHTML/CSSモダンコーディングTIPS</h3>
                  <p className={styles["desc"]}>新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、モダンなコーディングにチャレンジしましょう！</p>
                  <time className={styles["date"]} dateTime="2015-06-17">2015.06.17 WED</time>
                  <img src="/standard-layout/images/article.jpg" alt="コーディング画面" className={styles["image"]}/>
                </a>

                <a href="#" className={styles["articles-box"]}>
                  <h3 className={styles["title"]}>実務で支えるHTML/CSSモダンコーディングTIPS</h3>
                  <p className={styles["desc"]}>新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、モダンなコーディングにチャレンジしましょう！</p>
                  <time className={styles["date"]} dateTime="2015-06-17">2015.06.17 WED</time>
                  <img src="/standard-layout/images/article.jpg" alt="コーディング画面" className={styles["image"]}/>
                </a>

                <a href="#" className={styles["articles-box"]}>
                  <h3 className={styles["title"]}>実務で支えるHTML/CSSモダンコーディングTIPS</h3>
                  <p className={styles["desc"]}>新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、モダンなコーディングにチャレンジしましょう！</p>
                  <time className={styles["date"]} dateTime="2015-06-17">2015.06.17 WED</time>
                  <img src="/standard-layout/images/article.jpg" alt="コーディング画面" className={styles["image"]}/>
                </a>

                <a href="#" className={styles["articles-box"]}>
                  <h3 className={styles["title"]}>実務で支えるHTML/CSSモダンコーディングTIPS</h3>
                  <p className={styles["desc"]}>新しい要素が増えて大幅に表現力が広がったHTML5/CSS3を活用し、モダンなコーディングにチャレンジしましょう！</p>
                  <time className={styles["date"]} dateTime="2015-06-17">2015.06.17 WED</time>
                  <img src="/standard-layout/images/article.jpg" alt="コーディング画面" className={styles["image"]}/>
                </a>
            </div>
          </main>



          {/* サイドバー */}
          <div className={ styles.sidemenu }>

            {/* Ranking Area */}
            <h2 className={styles["heading"]}>RANKING</h2>

            {/* ランキングは要素の並びに意味があるので ul ではなく ol を使用した */}
            <ol className={styles["ranking"]}>
              <li className={styles["ranking-item"]}>
                <a href="#">
                  <img src="/standard-layout/images/ranking.jpg" alt="グラフの画像" className={styles["image"]}/>
                  <span className={styles["order"]}></span>
                  <p className={styles["text"]}>HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
                </a>
              </li>
              <li className={styles["ranking-item"]}>
                <a href="#">
                  <img src="/standard-layout/images/ranking.jpg" alt="グラフの画像" className={styles["image"]}/>
                  <span className={styles["order"]}></span>
                  <p className={styles["text"]}>HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
                </a>
              </li>
              <li className={styles["ranking-item"]}>
                <a href="#">
                  <img src="/standard-layout/images/ranking.jpg" alt="グラフの画像" className={styles["image"]}/>
                  <span className={styles["order"]}></span>
                  <p className={styles["text"]}>HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
                </a>
              </li>
              <li className={styles["ranking-item"]}>
                <a href="#">
                  <img src="/standard-layout/images/ranking.jpg" alt="グラフの画像" className={styles["image"]}/>
                  <span className={styles["order"]}></span>
                  <p className={styles["text"]}>HTML/CSSコーディングと切っても切れないWebブラウザのシェア動向をチェックしよう</p>
                </a>
              </li>
            </ol>

            <h2 className={styles["heading"]}>DOCUMENTS</h2>
            <ul className={styles["documents"]}>

              <li>
                <h3 className={styles["title"]}>html5</h3>
                <ul>
                  <li><a href="#">追加された要素</a></li>
                  <li><a href="#">削除された要素</a></li>
                  <li><a href="#">意味が変わった要素</a></li>
                  <li><a href="#">HTMLのコンテンツモデル</a></li>
                </ul>
              </li>

              <li>
                <h3 className={styles["title"]}>CSS3</h3>
                <ul>
                  <li><a href="#">追加されたプロパティ</a></li>
                  <li><a href="#">追加されたセレクタ</a></li>
                  <li><a href="#">追加された単位</a></li>
                </ul>
              </li>

              <li>
                <h3 className={styles["title"]}>JavaScript</h3>
                <ul>
                  <li><a href="#">JavaScriptの言語仕様</a></li>
                  <li><a href="#">ECMAScriptとは？</a></li>
                  <li><a href="#">jQueryとは？</a></li>
                </ul>
              </li>

              <li>
                <h3 className={styles["title"]}>Sass, Less, Stylus</h3>
                <p>準備中</p>
              </li>

              <li>
                <h3 className={styles["title"]}>TypeScript</h3>
                <p>準備中</p>
              </li>
            </ul>

            {/* search box */}
            <h2 className={styles["hidden"]}>SEARCH</h2>
            <form action="" className={styles["search-box"]}>
              <input type="text" name="search" placeholder="SEARCH" className={styles["search-input"]}/>
              <input type="submit" value="検索" className={styles["search-button"]}/>
              <p className={styles["text"]}>サイト内の文章を検索できます</p>
            </form> 
          </div> {/* Side bar */}
        </div> {/*  */}

        <footer className={ styles.footer }>
          <ul className={styles["horizontal-list"]}>
            <li className={styles["horizontal-item"]}><a href="#">ABOUT ME</a></li>
            <li className={styles["horizontal-item"]}><a href="#">SITE MAP</a></li>
            <li className={styles["horizontal-item"]}><a href="#">SNS</a></li>
            <li className={styles["horizontal-item"]}><a href="#">CONTACT</a></li>
          </ul>

          <p className={styles["copyright"]}>Copyright ©︎ 2015 SAMPLE SITE</p>
        </footer>
      </div>

    </>


  );
}
