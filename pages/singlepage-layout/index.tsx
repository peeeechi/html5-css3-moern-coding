import styles from './singlepage-layout.module.scss';
import React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function SinglepageLayout() {

    return (
        <>
            <Head>
                <title>singlepage-layout</title>
                <meta charSet="utf-8"/>
                <link rel="stylesheet" href="/singlepage-layout/css/normalize.css"/>
                <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:700,400"/>
            </Head>

            <div className={styles["singlepage-layout"]}>

                <header className={styles["header"]}>
                    <p className={styles["site-title-sub"]}>Web designer's portfolio</p>
                    <h1 className={styles["site-title"]}>HI, MY NAME IS ...</h1>

                    <p className={styles["site-description"]}>Check out some of my works.</p>

                    <div className={styles["buttons"]}>
                        <a href="#about" className={styles["button"]}>LEARN MORE</a>
                        <a href="#contact" className={ classNames(styles["button"], styles["button-showy"])}>SEND MESSAGE</a>
                    </div>
                </header>

                <section className={styles["about"]} id="about">
                    about
                </section>

                <section className={styles["works"]}>
                    works
                </section>

                <section className={styles["skills"]}>
                    skills
                </section>

                <section className={styles["contact"]} id="contact">
                    contact
                </section>

                <footer className={styles["footer"]}>
                    footer
                </footer>

            </div>
        </>
    );
}