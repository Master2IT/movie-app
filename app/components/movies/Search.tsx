"use client";

import StarIcon from "@components/icons/star.icon";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Search() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const search = params.get("search");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${search}&sort_by=download_count&page=${page.toString()}`
    );
    const data: any = await response.json();
    if (page == 1) {
      setMovies(data?.data?.movies);
    } else {
      setMovies(movies.concat(data?.data?.movies || []));
    }
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    setPage(1);

    if (search) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [searchParams]);

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
                  <h2 className="font-bold">{movie.title_english}</h2>
                  <p className="text-gray-500 h-10 text-sm overflow-hidden">
                    {movie?.summary
                      ? movie.summary?.slice(0, 85) + " ..."
                      : "No decription"}
                  </p>
                  <div className="flex w-full my-2 flex-wrap">
                    {movie?.genres?.map((genre, i) => (
                      <div className="text-sm text-yellow-500">
                        <span>{genre}</span>
                        {movie.genres.length - 1 != i && (
                          <span className="mx-2">-</span>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button className="btn btn-xs btn-primary btn-outline">
                      <StarIcon width="1.5em" height="1.5em" />
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
