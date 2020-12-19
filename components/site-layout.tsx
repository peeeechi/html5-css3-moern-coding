import React, { ReactNode } from 'react';
import Head from 'next/head';

export type SiteLayoutProps = {
    children: ReactNode;
    title: string;
}

export default function SiteLayout({children, title} : SiteLayoutProps) {
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {children}
        </>
    );
}