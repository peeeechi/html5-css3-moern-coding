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
                    <h2 className={styles["heading"]}>ABOUT ME</h2>

                    <p className={styles["about-text"]}>
                        はじめまして。日本でWebデザイナーをしています。<br/>
                        デザインの専門学校を卒業し、制作会社での業務経験を経て、現在はフリーランスとして働いています。
                    </p>

                    <p className={styles["about-text"]}>
                        このサイトは『HTML/CSS モダンコーディング』という書籍のサンプルとして作られた、架空のWebデザイナーのポートフォリオサイトです。<br/>
                        このサイトのようなサイトを一から作る過程を通して、HTMLとCSSの実践的なコーディングノウハウを学ぶことができます。
                    </p>

                </section>

                <section className={styles["works"]}>
                    <h2 className={styles["heading"]}>WORKS</h2>

                    <div className={styles["works-wrapper"]}>

                        <div className={styles["work-box"]}>
                            <img src="/singlepage-layout/images/tree.jpg" alt="制作事例1" className={styles["work-image"]}/>
                            <p className={styles["work-text"]}>
                                ひとつめの制作事例が入ります。<br/>
                                簡単な説明が入ります。<br/>
                                使用ツール：XXX, XXX, XXX<br/>

                                <a href="#" className={styles["button"]}>READ MORE</a>
                            </p>
                        </div>

                        <div className={styles["work-box"]}>
                            <img src="/singlepage-layout/images/building.jpg" alt="制作事例2" className={styles["work-image"]}/>
                            <p className={styles["work-text"]}>
                                ふたつめの制作事例が入ります。<br/>
                                簡単な説明が入ります。<br/>
                                使用ツール：XXX, XXX, XXX<br/>

                                <a href="#" className={styles["button"]}>READ MORE</a>
                            </p>
                        </div>

                        <div className={styles["work-box"]}>
                            <img src="/singlepage-layout/images/lake.jpg" alt="制作事例3" className={styles["work-image"]}/>
                            <p className={styles["work-text"]}>
                                みっつめの制作事例が入ります。<br/>
                                簡単な説明が入ります。<br/>
                                使用ツール：XXX, XXX, XXX<br/>

                                <a href="#" className={styles["button"]}>READ MORE</a>
                            </p>
                        </div>

                        <div className={styles["work-box"]}>
                            <img src="/singlepage-layout/images/sky.jpg" alt="制作事例4" className={styles["work-image"]}/>
                            <p className={styles["work-text"]}>
                                よっつめの制作事例が入ります。<br/>
                                簡単な説明が入ります。<br/>
                                使用ツール：XXX, XXX, XXX<br/>

                                <a href="#" className={styles["button"]}>READ MORE</a>
                            </p>
                        </div>

                    </div>
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