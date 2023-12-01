import MovieCarousel from "@components/movies/movieCarousel";
import Categories from "@components/categories/categories";
import React from "react";

const getMovies = async () => {
    const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?with_rt_ratings=true&minimum_rating=5&sort_by=year",
        {cache: "force-cache", next: {revalidate: 3600}}
    );
    return response.json();
};
const getDiscoverMovies = async () => {
    const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year&with_rt_ratings=true",
        {cache: "force-cache", next: {revalidate: 3600}}
    );
    return response.json();
};

if (typeof window != 'undefined') {
    window.dataLayer = window.dataLayer || []

    // @ts-ignore
    function gtag() {
        typeof window !== "undefined" && window.dataLayer.push(arguments)
    }

// @ts-ignore
    gtag('js', new Date());

// @ts-ignore
    gtag('config', 'G-P0TKX7R77S');
}

export default async function Home() {
    return (
        <div className="md:px-32">
            <ins className="adsbygoogle"
                 style={{
                     display: 'inline-block',
                     width: '728px',
                     height: '90px'
                 }}
                 data-ad-client="ca-pub-5595968868369218"
                 data-ad-slot="5271167652"></ins>
            <Categories/>
            <ins className="adsbygoogle"
                 style={{
                     display: 'inline-block',
                     width: '728px',
                     height: '90px'
                 }}
                 data-ad-client="ca-pub-5595968868369218"
                 data-ad-slot="5271167652"></ins>
            <NewMovies/>
            <ins className="adsbygoogle"
                 style={{
                     display: 'inline-block',
                     width: '728px',
                     height: '90px'
                 }}
                 data-ad-client="ca-pub-5595968868369218"
                 data-ad-slot="5271167652"></ins>
            <DiscoverMovies/>
            <ins className="adsbygoogle"
                 style={{
                     display: 'inline-block',
                     width: '728px',
                     height: '90px'
                 }}
                 data-ad-client="ca-pub-5595968868369218"
                 data-ad-slot="5271167652"></ins>
        </div>
    );
}

const NewMovies = async () => {
    const moviesData = await getMovies();
    const movies = moviesData.data.movies;
    return (
        <>
            <MovieCarousel
                seeAllLink="?with_rt_ratings=true&minimum_rating=5&sort_by=year"
                movies={movies}
                title="New Movies"
            />
            <div className="hidden md:flex gap-2 w-full items-center justify-center mb-5">
                <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFC629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                          d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"/>
                </svg>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-100"></span>
                <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFC629" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m9 5l2 2.333M9 19l6-7l-1.5-1.75"/>
                </svg>
            </div>
        </>
    );
};

const DiscoverMovies = async () => {
    const moviesData = await getDiscoverMovies();
    const movies = moviesData.data.movies;
    return (
        <>
            <MovieCarousel
                seeAllLink="?minimum_rating=7&sort_by=year&with_rt_ratings=true"
                movies={movies}
                title="Discover Movies"
            />
            <div className="hidden md:flex gap-2 w-full items-center justify-center mb-5">
                <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFC629" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                          d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"/>
                </svg>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-100"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-100"></span>
                <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#FFC629" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m9 5l2 2.333M9 19l6-7l-1.5-1.75"/>
                </svg>
            </div>
        </>
    );
};
