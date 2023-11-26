"use client";

import StarIcon from "@components/icons/star.icon";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Search() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const search = params.get("search");
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${search}&sort_by=download_count`
    );
    const data: any = await response.json();
    setMovies(data.data.movies);
  };

  useEffect(() => {
    if (search) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  return (
    <div>
      {movies && movies.length ? (
        movies.map((movie) => (
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
        ))
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
