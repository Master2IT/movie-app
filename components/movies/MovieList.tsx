"use client";

import Movies from "@components/movies/movies";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSession} from "next-auth/react";

function MovieList() {
    const {data: session} = useSession()
    const param = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        const params = new URLSearchParams(param.toString());
        params.set("page", "1");

        const response = await fetch(
            `/api/movie?${params}`,
            {
                headers: {
                    userId: session?.user.id
                }
            }
        );
        const moviesData = await response.json();
        setMovies(moviesData);
        setPage(1);
    };

    const fetchMore = async () => {
        const params = new URLSearchParams(param.toString());
        params.set("page", (page + 1).toString());

        const response = await fetch(
            `/api/movie?${params}`
        );
        const moviesData = await response.json();

        setPage((prev) => prev + 1);
        setMovies([...movies, ...moviesData]);
    };

    useEffect(() => {
        fetchData();
    }, [param]);
    return (
        <InfiniteScroll
            dataLength={movies.length} //This is important field to render the next data
            next={fetchMore}
            hasMore={true}
            loader={
                <progress className="progress progress-primary w-full"></progress>
            }
        >
            <Movies movies={movies}/>
        </InfiniteScroll>
    );
}

export default MovieList;
