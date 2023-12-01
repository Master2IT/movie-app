"use client";

import BackIcon from "@components/icons/back.icon";
import VideoIcon from "@components/icons/video.icon";
import DownloadIcon from "@components/icons/download.icon";
import {useParams, useRouter} from "next/navigation";
import 'video.js/dist/video.min'
import 'videojs-youtube/dist/Youtube.min'
import 'video.js/dist/video-js.css';
import VideoPlayer from "@components/videoPlayer";
import MovieCarousel from "@components/movies/movieCarousel";
import {useEffect, useState} from "react";
import HomeIcon from "@components/icons/home.icon";
import Link from "next/link";

const MovieCard = ({movie}) => {
    const router = useRouter()
    return (
        <section className="md:px-32 h-screen relative" style={{
            background: `url(${
                movie.large_cover_image || "/images/no-movie.svg"
            }) no-repeat center center`,
            backgroundSize: "cover",
        }}>
            {/* Shadow bg */}
            <div className="bg-gray-900/[0.9] w-full h-full absolute inset-0 m-auto z-1"></div>
            {/* Navbar */}
            <div className="relative flex items-center justify-between z-10 pt-2 px-2 md:px-0">
                <div className="flex items-center w-[87%] md:w-full">
                    <button
                        onClick={() => router.back()}
                        className="btn btn-ghost z-10 btn-square btn-sm md:btn-md"
                    >
                        <BackIcon width="1.7em" height="1.7em"/>
                    </button>
                    <h3 className="font-bold pr-4 items-center truncate ml-2">{movie.title_long}</h3>
                </div>
                <Link href="/"
                      className="btn btn-ghost btn-square z-10"
                >
                    <HomeIcon width="1.5em" height="1.5em"/>
                </Link>
            </div>
            <div
                className="card md:flex-row md:items-start md:mt-10"
            >
                {/*Desktop Trailer Video */}
                {
                    movie.yt_trailer_code && <div className="hidden md:flex w-1/2">
                        <iframe height="350" className="w-full rounded-xl"
                                src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}>
                        </iframe>
                    </div>
                }
                <div className="card-body z-10 px-5 flex-1 md:py-0">
                    <div className="flex md:hidden">
                        {
                            movie.yt_trailer_code && <iframe height="200" className="w-full rounded-xl"
                                                             src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}>
                            </iframe>
                        }
                    </div>
                    <h2 className="card-title mt-2">
                        <VideoIcon stroke="#FFC629" width="1.2em" height="1.2em"/>
                        <span className="">{movie.title_english}</span>
                    </h2>
                    <div className="card-actions h-10 items-end">
                        <button className="btn btn-outline btn-primary btn-sm">
                            <span>{movie.rating}</span>
                            <Rating rate={Math.round((movie.rating / 10) * 5)}/>
                        </button>
                        <button className="btn btn-neutral btn-outline btn-sm">
                            {movie.language}
                        </button>
                        <button className="btn btn-neutral btn-outline btn-sm">
                            {movie.year}
                        </button>
                    </div>
                    <div className="flex gap-1 flex-wrap items-center text-gray-400">
                        {movie?.genres?.sort((a, b) => b.length - a.length).map((genre, i) => (
                            <>
                                <div className="text-xs">{genre}</div>
                                {(i != (movie?.genres?.length - 1)) &&
                                    <span>·</span>}
                            </>
                        ))}
                    </div>
                    <p className={`h-auto overflow-auto my-3 text-gray-300 leading-8 md:leading-10 ${!movie.yt_trailer_code ? 'max-h-72' : 'max-h-44 md:max-h-[200px]'}`}>
                        {movie.description_intro || "No description found!"}
                    </p>
                    <div className="block md:hidden">
                        <DownloadLinks movie={movie}/>
                    </div>
                </div>
            </div>
            <div className="z-10 relative my-10 hidden md:block">
                <DownloadLinks movie={movie}/>
            </div>
            <Related/>
        </section>
    );
};

const DownloadLinks = ({movie}) => {
    return (
        <>
            <h1 className="divider">Download links</h1>
            <div className="card-actions grid grid-cols-2 md:grid-cols-4 gap-2">
                {movie?.torrents.map((torrent) => (
                    <a
                        href={torrent.url}
                        className="btn btn-primary pr-2 w-full flex flex-nowrap justify-between"
                    >
                        <div className="flex items-center gap-1">
                            <DownloadIcon/>
                            <span className="text-xs normal-case">
                        {torrent.quality} {torrent.type}
                      </span>
                        </div>
                        <span className="text-[10px] bg-secondary rounded-full text-primary py-1 px-3">
                      {torrent.size}
                    </span>
                    </a>
                ))}
            </div>
        </>
    )
}

const Rating = ({rate = 1}: {
    rate: number
}) => {
    return (
        <div className="rating rating-sm">
            {Array.from(Array(5).keys()).map((i) => (
                <input
                    type="radio"
                    className="mask mask-star-2 bg-yellow-500"
                    checked={i + 1 == rate}
                />
            ))}
        </div>
    );
};
const Related = () => {
    const params = useParams()
    const [movies, setMovies] = useState([])

    const fetchData = async () => {
        const res = await fetch('/api/movie/related/' + params.id)
        const moviesData = await res.json()
        setMovies(moviesData)
    }

    useEffect(() => {
        console.log(params)
        fetchData()
    }, []);
    return (
        <div className="bg-secondary rounded-tr-2xl rounded-tl-2xl px-5 relative pb-10 -top-7 md:top-0" style={{
            boxShadow: '0 -2px 1px 1px #ffc62991'
        }}>
            <MovieCarousel
                className="pt-5"
                movies={movies}
                title="Related Movies"
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
        </div>
    );
};

export default MovieCard;
