import MovieCarousel from "@components/movies/movieCarousel";
import Categories from "@components/categories/categories";

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

export default async function Home() {
    return (
        <div className="md:px-32">
            <Categories/>
            <NewMovies/>
            <DiscoverMovies/>
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
