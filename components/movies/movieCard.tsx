"use client";

import BackIcon from "@components/icons/back.icon";
import VideoIcon from "@components/icons/video.icon";
import DownloadIcon from "@components/icons/download.icon";
import {useRouter} from "next/navigation";
import 'video.js/dist/video.min'
import 'videojs-youtube/dist/Youtube.min'
import 'video.js/dist/video-js.css';
import VideoPlayer from "@components/videoPlayer";

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
            <div
                className="card"
            >
                {/* Navbar */}
                <div className="flex items-center z-10 pt-2">
                    <button
                        onClick={() => router.back()}
                        className="btn btn-ghost hover:bg-transparent z-10"
                    >
                        <BackIcon width="2em" height="2em"/>
                    </button>
                    <h3 className="font-bold pr-4 items-center pt-1">{movie.title_long}</h3>
                </div>
                <div className="card-body z-10 px-5">
                    {/*<video width="200" height="200">*/}
                    {/*    <source src="https://youtu.be/lJIrF4YjHfQ" type="mp4"/>*/}
                    {/*</video>*/}
                    {
                        movie.yt_trailer_code && <iframe height="200" className="w-full rounded-xl"
                                                         src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}>
                        </iframe>
                    }
                    {/*<VideoPlayer link={movie.yt_trailer_code}*/}
                    {/*/>*/}
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
                    <p className={`h-auto overflow-auto my-3 text-gray-300 leading-8 md:leading-10 ${!movie.yt_trailer_code ? 'max-h-72' : 'max-h-44'}`}>
                        {movie.description_intro || "No description found!"}
                    </p>
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
                </div>
            </div>
        </section>
    );
};

const Rating = ({rate = 1}: { rate: number }) => {
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

export default MovieCard;
