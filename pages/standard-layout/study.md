# standard layout coding 要点

このページをコーディングしていく際の要点を記載します。

## ざっくりとしたHTML要素を記述

このページは、ヘッダー、メインコンテンツ、サイドバー、フッターから構成される。
その為、これらをまずはHTML要素として追加し、対応するクラスもSCSSへ定義しておく。

index.tsx

```typescript
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


```

standard-layout.module.scss
```scss
@charset "UTF-8";

.standard-layout {
    
    .header {
        // 画面いっぱい
        width: $header-width;
    }
    
    .wrapper {
        width: $content-width + $between-contents-width + $sidemenu-width;
    
        // margin: top side bottom
        margin: 30px auto 40px;
    }
    
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
    
    .main {
        // main タグに対応していないブラウザにも対応するため
        // display: block; を指定
        display: block;
        float: left;
        width: $content-width;
        background-color: yellow;
    }
    
    .sidemenu {
        float: right;
        width: $sidemenu-width;
        background-color: blue;
    }
    
    .footer {
        // 画面いっぱい
        width: $footer-width;
    }
    
    .main, .header, .sidemenu, .footer {
        border: 1px solid #aaa;
        background-color: #ccc;
    
    }
    
    .header, .footer {
        height: 100px;
    }
    
    .main, .sidemenu {
        height: 500px;
    }
}
```


Next では`html`,`p`等の要素のみをターゲットにしたセレクターを使用できないため、ページ全体を`.standard-layout`として
マークアップする。
また、NextのCSS Modulesは 変数としてimportする必要があり、(`import './standard-layout.module.scss';` と書けない)
styleNameにバインドする際、複数の場合は以下のように記載する必要がある

```typescript

 <div className={ classNames(styles.huga, styles.hoge) }>
 ...
 </div>

// もしくは

 <div className={ [styles.huga, styles.hoge].join(' ') }>
 ...
 </div>

```

また、CSSにおいてはまずはレイアウト部分大まかな位置関係を作成する。
具体的には、

### header,footer
- 横幅いっぱいなので `width: 100%` を指定。

### 中央部(wrapper)
- `float` を使用してメインコンテンツとサイドバーを横並びに配置する。
- 左右に多少の余白を確保するため、コンテンツ表示に必要な幅を残して左右、上下に`margin`を設定。
  - 左右はいい感じに自動調整して欲しいので `auto` を指定。
- `float` の効果で要素の高さが無視され、footerが被ってきてしまうので、`clear: both;` によって回り込みを解除するクラスを定義する(`.clearfix`)
  - このクラスを定義したからの要素を`.wrapper`の要素の後に定義すれば正常に表示されるが、その為だけに要素を書くのは冗長
    - `.clearfix`の疑似要素`::after`を使用して定義し、`.wrapper` を定義した要素一緒に定義することで同様の効果を得る。
- `.main .sidebar`は`float: left;`, `float: right;`でそれぞれ左右に配置。`width` でそれぞれの幅を定義する。


## 全体のベースとなるCSSを定義する

- フォント
  - Macように`Hiraginno Kaku Gothic ProN`、Windows向けに`Meiryo`(メイリオ)を指定。間にスペース、全角文字が含まれる場合は`"`か`'`で囲む
- テキストの色
  - #333
- ベースとなるフォントサイズ
  - ページ全体のサイズを62.5%(16px * 62.5% = 10px)
    - pxで指定しないのは、ユーザーがブラウザのデフォルト文字サイズを変更していた場合でもある程度対応できるようにするため
  - body部分を1.2rem(remは最上位の文字サイズに対しての比率、emは親要素に対しての比率)
- リンクの文字色
  - `text-decoration: node`でもともと表示される下線を消している
- `box-sizing` を初期値`content-box`から`border-box`へ変更
  - `content-box`: `width`の指定値に`border`と`padding`の領域が含まれない
  - `border-box`: `width`の指定値に`border`と`padding`の領域が含まれる(より直観的に指定できる)

以上の内容をscssへ追記する

```scss

.standard-layout {
    
    // ↓追記
    html {
        font-size: 62.5%;
    }
    
    body {
        color: #333;
        font-size: 1.2rem;
        font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    }

    // 全ての要素(疑似要素含む)
    * {
        &::before, &::after {
            box-sizing: border-box;
        }
    }

    a {
        &:link, &:visited, &:hover, &:active {
            color: #d03c56;
            text-decoration: none;
        }
    }

    // ↑追記
    
    .header {
        // 画面いっぱい
        width: $header-width;
    }
    ...

```

## header のコーディング

- paddingの指定
- 背景画像の設定
    - 幅1pxの画像をx方向に繰り返し敷き詰めてストライプを表現
      - 繰り返しで表現出来る場合は元画像の大きさを出来るだけ小さくすることでページ全体のファイルサイズを削減出来る。
- box-shadowで影を付ける


### タイトル(logo) のコーディング
タイトルはlogoとして画像で表現するが、そのままだとクローラーがサイトのタイトルを解釈出来ないため、
`h1`要素でタイトルを記述し、CSSで非表示にする。

- `.logo`として実装
- `text-indent: 100%`として要素分のインデントを確保してテキストを要素外へ押し出し、
  - `white-space: nowrap`として要素外へはみ出したテキストの折り返しを禁止し、
    - `over-flow: hidden` としてはみ出した要素を非表示にしている

また、サイト名のlogoはトップページへのリンクにされることが多いため、
`a`要素を用いてリンク化する。


- keyword: marginの相殺


htmlとscssの追記部分は以下のようになる

```html
...
    <div className={styles["standard-layout"]}>
        <header className={ styles.header }>
          <!-- 追記部分 -->
          <h1 className={styles.logo}>
            <a href="/standard-layout">SAMPLE SITE</a>
          </h1>
          <!-- 追記部分 -->
        </header>

        <div className={ classNames(styles.wrapper, styles.clearfix) }>
          ...

```

```scss
  .logo {
      width: $site-logo-width;
      height: $site-logo-height;
      // 中央寄せ
      margin:  0 auto;
      background-image: url('/standard-layout/images/logo.png');

      // h1に記述されているテキストを非表示にする設定
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;

      a {
          // logo image をピッタリ覆うようにリンクを作成する
          display: block;
          width: 100%;
          height: 100%;
      }
  }

```

### グローバルナビゲーション

`nav`要素の中に`a`要素のリンクをいれ、ナビゲーションとする。



```html

  ...
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
        ...

```

```scss

  $nav-item-height: 30px;


 .global-nav {
      margin-top: 15px;

      // global-nav とその配下の要素に中央寄せを適用する
      text-align: center;

      .nav-item {

          // Linkが横並びになるように
          display: inline-block;
          margin: 0 10px;

          a {
              display: inline-block;
              width: 100px;

              // height と line-height に同じ高さを指定している
              height: $nav-item-height;
              line-height: $nav-item-height;
              text-align: center;
              border-radius: 8px;
              color: #666;
              font-size: 1.3rem;
              
              // 文字間のスペース
              letter-spacing: 1px;

              // transition: 0.15s;
              transition-duration: 0.15s;

              &:hover {
                  background-color: #d03c56;
                  color: #fff;
              }
          }

      }
      
      .nav-item.active {
          a {
              background-color: #d03c56;
              color: #fff;
          }
      }

  }

```


##