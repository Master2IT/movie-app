"use client";

import BackIcon from "@/components/icons/back.icon";
import DownloadIcon from "@/components/icons/download.icon";
import VideoIcon from "../icons/video.icon";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="card w-screen h-screen md:grid md:grid-cols-5 md:gap-3"
      style={{
        background: `url(${
          movie.large_cover_image || "/images/no-movie.svg"
        }) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {/* Shadow bg */}
      <div className="bg-gray-900/[0.8] w-full h-full absolute top-0 right-0 left-0 bottom-0 m-auto z-1"></div>
      {/* Navbar */}
      <div className="flex items-center absolute top-0 left-0 w-full pt-2">
        <Link
          href="/movies?sort_by=date_added"
          className="btn btn-ghost hover:bg-transparent z-10"
        >
          <BackIcon width="2em" height="2em" />
        </Link>
        <h3 className="font-bold pr-4 items-center pt-1">{movie.title_long}</h3>
      </div>
      <div className="relative z-10 top-10 w-screen">
        <div className="card-body px-5 w-full">
          {/* <VideoPlayer
                            file={movie.torrents[0].url}
                            options={videoPlayerOptions}
                            onReady={handlePlayerReady}
                        /> */}
          <h2 className="card-title mt-2">
            <VideoIcon stroke="#FFC629" width="1.2em" height="1.2em" />
            <span className="">{movie.title_english}</span>
          </h2>
          <div className="card-actions h-10 items-end">
            <button className="btn btn-outline btn-primary btn-sm">
              <span>{movie.rating}</span>
              <Rating rate={Math.round((movie.rating / 10) * 5)} />
            </button>
            <button className="btn btn-neutral btn-outline btn-sm">
              {movie.language}
            </button>
            <button className="btn btn-neutral btn-outline btn-sm">
              {movie.year}
            </button>
          </div>
          <p className="max-h-72 overflow-auto">
            {movie.description_intro || "No description found!"}
          </p>

          <h1 className="mt-10 divider">Download links</h1>
          <div className="card-actions grid grid-cols-2 md:grid-cols-4 gap-2">
            {movie?.torrents.map((torrent) => (
              <a
                href={torrent.url}
                className="btn btn-primary pr-2 w-full flex flex-nowrap justify-between"
              >
                <div className="flex items-center gap-1">
                  <DownloadIcon />
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
    </div>
  );
};

const Rating = ({ rate = 1 }: { rate: number }) => {
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
