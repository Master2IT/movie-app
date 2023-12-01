import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import React from "react";
import Provider from "../components/Provider";
import {Analytics} from '@vercel/analytics/react';
import Script from "@node_modules/next/dist/client/script";


const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "FiFi Movie",
    description: "Watch and explore online with FiFi Movie",
};

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
        </head>
        <body className={montserrat.className}>
        <Provider>
            {children}
        </Provider>
        <Analytics/>
        </body>
        <Script async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5595968868369218"
                crossOrigin="anonymous"></Script>
        <Script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </Script>
        </html>
    );
}
