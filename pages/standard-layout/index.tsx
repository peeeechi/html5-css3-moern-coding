import React from 'react';
import Head from 'next/head';

export default function StandardLayout() {
  return (

    <>
      <Head>
        <title>standard layout</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="css/reset.css" />
      </Head>

      <header className="header">
        header
      </header>

      <div className="wrapper">
        <main className="main">

        </main>
        <div className="sidemenu">

        </div>
      </div>

      <footer className="footer">

      </footer>
    </>


  );
}
