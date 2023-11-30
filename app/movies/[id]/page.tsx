"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import MovieCard from "@components/movies/movieCard";

const MovieDetails = () => {
    const params = useParams();
    const [movie, setMovie]: any = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/movies/api/${params.id}`);
            setMovie(await res.json());
        };
        fetchData();
    }, []);
    return (
        <>
            {Object.keys(movie).length ? (
                <MovieCard movie={movie}/>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default MovieDetails;
