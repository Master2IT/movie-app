'use client';

import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import Filters from "@/app/components/filters";
import Movies from "@/app/components/movies/movies";
import InfiniteScroll from "react-infinite-scroll-component";

const MoviesPage = () => {
    const param = useSearchParams()
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const fetchData = async () => {
        const params = param.toString()
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?${params}&page=${page}`, {cache: 'force-cache', next: {revalidate: 3600}});
        const moviesData = await response.json();
        if (!movies.length) {
            setMovies(moviesData.data.movies)
        } else {
            setMovies(movies.concat(moviesData.data.movies))
        }
        setPage(page + 1)
    }

    useEffect(() => {
        setMovies([])
        setPage(1)

        fetchData()

    }, [param]);
    return (
        <>
            <Filters/>
            <div className="divider"></div>
            <InfiniteScroll
                dataLength={movies.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<progress className="progress progress-primary w-full"></progress>}
            >
                <Movies movies={movies}/>
            </InfiniteScroll>
        </>
    );
}


export default MoviesPage