"use client";

import Navbar from "@components/Navbar";
import React from "react";
import BottomNav from "@components/BottomNav";
import {useParams, usePathname} from "next/navigation";

const Template = ({children}) => {
    const params = useParams();
    const pathName = usePathname();
    const pages = ["/movies/", "/search"];
    const isNotShowInMovieDetails = !pages.includes(pathName) && !params.id;
    return (
        <>
            {isNotShowInMovieDetails && (
                <header>
                    <Navbar/>
                </header>
            )}
            {isNotShowInMovieDetails ? (
                <section className="container mx-auto px-4 pb-20 mt-10">
                    {children}
                </section>
            ) : (
                children
            )}
            {isNotShowInMovieDetails && (
                <nav>
                    <BottomNav/>
                </nav>
            )}
        </>
    );
};

export default Template;
