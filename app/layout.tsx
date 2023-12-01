import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import React from "react";
import Provider from "../components/Provider";
import {Analytics} from '@vercel/analytics/react';
import Script from "next/script";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "FiFi Movie",
    description: "Watch and explore online with FiFi Movie",
};

declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="mytheme">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="google-adsense-account" content="ca-pub-5595968868369218"/>
        </head>
        <body className={montserrat.className}>
        <Provider>
            {children}
        </Provider>
        <Analytics/>

        <Script async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5595968868369218"
                crossOrigin="anonymous"></Script>
        <Script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P0TKX7R77S"></Script>
        </body>
        </html>
    );
}
