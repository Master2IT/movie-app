"use client";

import StarIcon from "@components/icons/star.icon";
import Image from "next/image";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Search() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const search = params.get("search");
    const [movies, setMovies] = useState([]);
    // const [page, setPage] = useState(1);
    const page = useRef(1)

    const fetchData = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?query_term=${search.toLowerCase().trim()}&sort_by=download_count&page=${page.current}`
        );
        const data: any = await response.json();
        if (page.current == 1) {
            setMovies(data?.data?.movies);
        } else {
            setMovies(movies.concat(data?.data?.movies || []));
        }
        page.current += 1;

        console.log(page)
    };

    useEffect(() => {
        page.current = 1

        if (search) {
            fetchData();
        } else {
            setMovies([]);
        }
    }, [search]);

    return (
        <div>
            {movies && movies.length ? (
                <InfiniteScroll
                    dataLength={movies.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <progress className="progress progress-primary w-full"></progress>
                    }
                >
                    {movies.map((movie) => (
                        <Link href={`movies/${movie.id}`}>
                            <div className="flex gap-2 items-start">
                                <Image
                                    src={movie.large_cover_image}
                                    width={85}
                                    height={85}
                                    alt={movie.title_english}
                                />
                                <div>
                                    <h2 className="font-bold text-[15px]">{movie.title_english.slice(0, 25)} {movie.title_english.length >= 25 && "..."}</h2>
                                    <p className="text-gray-500 h-10 text-sm overflow-hidden">
                                        {movie?.summary
                                            ? movie.summary?.slice(0, 65) + (movie.summary.length >= 65 && ' ...')
                                            : "No decription"}
                                    </p>
                                    <div className="flex w-full items-center gap-1 my-2 flex-wrap">
                                        {movie?.genres?.map((genre, i) => (
                                            i < 3 && <>
                                                <div className="text-xs">{genre}</div>
                                                {(i != (movie?.genres?.length > 2 ? 2 : (movie?.genres?.length - 1))) &&
                                                    <span>·</span>}
                                            </>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 mt-2">
                                        <button className="btn btn-xs btn-primary btn-outline">
                                            <StarIcon width="1.5em" height="1.5em"/>
                                            <span>{movie.rating}</span>
                                        </button>
                                        <button className="btn btn-xs btn-ghost btn-outline">
                                            <span>{movie.year}</span>
                                        </button>
                                        <button className="btn btn-xs btn-ghost btn-outline">
                                            <span>{movie.language}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="divider my-2"></div>
                        </Link>
                    ))}
                </InfiniteScroll>
            ) : (
                <div className="flex items-center justify-center">
                    <Image
                        className="mt-20"
                        src="/images/no-movie.svg"
                        width={300}
                        height={300}
                        alt={""}
                    />
                </div>
            )}
        </div>
    );
}

export default Search;
