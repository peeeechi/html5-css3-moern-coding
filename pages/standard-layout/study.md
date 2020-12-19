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
    </>
  );
}

```

standard-layout.module.scss
```scss

.header {
    // 画面いっぱい
    width: 100%;
}

.wrapper {
    width: 970px;

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
    width: 660px;
    background-color: yellow;
}

.sidemenu {
    float: right;
    width: 275px;
    background-color: blue;
}

.footer {
    // 画面いっぱい
    width: 100%;
}

// ↓以下は確認ように一時的に記載

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

```


NextのCSS Modulesは 変数としてimportする必要があり、(`import './standard-layout.module.scss';` と書けない)
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


