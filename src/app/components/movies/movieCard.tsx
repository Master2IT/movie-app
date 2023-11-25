"use client";

import Image from "next/image";
import BackIcon from "@/app/components/icons/back.icon";
import {useRouter} from "next/navigation";
import DownloadIcon from "@/app/components/icons/download.icon";
import VideoPlayer from "@/app/components/videoPlayer";
import {useRef} from "react";
import VideoIcon from "../icons/video.icon";

const MovieCard = ({movie}) => {
    const router = useRouter();
    const playerRef = useRef(null);
    const videoPlayerOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        controlBar: {
            volumePanel: {
                inline: false,
            },
        },
        fluid: true,
        preload: "metadata",
        sources: [
            {
                src: "https://abra--7537ca20.api.nocturnal-narwhal.buzz/6c003c9bed00e4dc739959384e1f2de1bb0dabc1/Rumble%20Through%20The%20Dark%20(2023)%20%5B720p%5D%20%5BWEBRip%5D%20%5BYTS.MX%5D%2FRumble.Through.The.Dark.2023.720p.WEBRip.x264.AAC-%5BYTS.MX%5D.mp4~vod/hls/3d3d1dbf359b9e16bedf700c9f438165/index.m3u8?user-id=5000d9755cc64bfd8da44ff23b1b6c06&download-id=1a79d3ae57a88634af4d4a172d7bcba8&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTkuMC4wLjAgU2FmYXJpLzUzNy4zNiIsInJlbW90ZUFkZHJlc3MiOiIxNzYuNDEuNDguMjE2IiwiZG9tYWluIjoid2VidG9yLmlvIiwiZXhwIjoxNzAxMDE2NzAzLCJzZXNzaW9uSUQiOiJoVG1oN0FPeTNCUEJnUjlfRFZpQTJMMEwxY2gzZEgxTyIsInJhdGUiOiIxME0iLCJyb2xlIjoibm9ib2R5In0.IXIiHvm1UAGxSJ0Tk0vzgj4OQ0G7kqonOvp5u1Q3K8w&api-key=8acbcf1e-732c-4574-a3bf-27e6a85b86f1",
            },
        ],
        tracks: [
            {
                src: "https://abra--7537ca20.api.nocturnal-narwhal.buzz/6c003c9bed00e4dc739959384e1f2de1bb0dabc1/Rumble%20Through%20The%20Dark%20(2023)%20%5B720p%5D%20%5BWEBRip%5D%20%5BYTS.MX%5D%2FSubs%2FEnglish.srt?user-id=081da0bd27ddd90e5f9640af3f3b205e&download=true&download-id=3b73002bd8c8874d197481dd1e7aa5e9&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTkuMC4wLjAgU2FmYXJpLzUzNy4zNiIsInJlbW90ZUFkZHJlc3MiOiIxNzYuNDEuNDguMjE2IiwiZG9tYWluIjoid2VidG9yLmlvIiwiZXhwIjoxNzAxMDE4MDkwLCJzZXNzaW9uSUQiOiJoVG1oN0FPeTNCUEJnUjlfRFZpQTJMMEwxY2gzZEgxTyIsInJhdGUiOiIxME0iLCJyb2xlIjoibm9ib2R5In0.QhUGzK_d_cfk1iL_3vTfuoO7oo0xIuu8weAjfn6M_SI&api-key=8acbcf1e-732c-4574-a3bf-27e6a85b86f1",
                kind: "captions",
                srclang: "en",
                label: "English",
            },
        ],
        poster: movie.background_image_original,
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on("waiting", () => {
            console.log("player is waiting");
        });

        player.on("dispose", () => {
            console.log("player will dispose");
        });
    };

    return (
        <div className="card w-full md:grid md:grid-cols-5 md:gap-3 !bg-cover bg-scroll">
            <figure className="col-span-1 relative rounded-none">
                <Image
                    className="w-full md:h-[calc(100vh-12.3em)]"
                    width={500}
                    height={500}
                    src={movie.large_cover_image || "/images/no-movie.svg"}
                    alt={movie.title_english}
                />
                <div
                    className="bg-gray-900/[0.8] w-full h-full absolute top-0 right-0 left-0 bottom-0 m-auto z-1"></div>
                <div className="flex items-center absolute top-0 left-0 w-full pt-2">
                    <button onClick={() => router.back()} className="btn btn-ghost z-10">
                        <BackIcon width="2em" height="2em"/>
                    </button>
                    <h3 className="font-bold pr-4 items-center pt-1">
                        {movie.title_long}
                    </h3>
                </div>
                <div className="absolute top-10 left-0 right-0 mx-auto">
                    <div className="card-body px-5">
                        <VideoPlayer
                            file={movie.torrents[0].url}
                            options={videoPlayerOptions}
                            onReady={handlePlayerReady}
                        />
                        <h2 className="card-title mt-2">
                            <VideoIcon stroke="#FFC629" width="1.2em" height="1.2em"/>
                            <span className="truncate">{movie.title_long}</span>
                        </h2>
                        <div className="card-actions h-10 items-end">
                            <button className="btn btn-outline btn-primary btn-sm">
                                <span>{movie.rating}</span>
                                <Rating rate={Math.round((movie.rating / 10) * 5)}/>
                            </button>
                            <button className="btn btn-neutral btn-outline btn-sm">
                                {movie.language}
                            </button>
                        </div>
                        <p className="h-[187px] overflow-auto">
                            {movie.description_intro || "No description found!"}
                        </p>
                    </div>
                </div>
            </figure>
            <div className="card-body bg-glass bg-secondary px-5 py-4 relative -top-5 rounded-tl-2xl rounded-tr-2xl">
                <div className="card-actions grid grid-cols-2 gap-2">
                    {movie?.torrents.map((torrent) => (
                        <a
                            href={torrent.url}
                            className="btn btn-primary btn-outline w-full flex flex-nowrap"
                        >
                            <DownloadIcon/>
                            <span className="text-xs normal-case">
                {torrent.quality} {torrent.type}
              </span>
                            <span className="badge badge-sm">{torrent.size}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Rating = ({rate = 1}: { rate: number }) => {
    return (
        <div className="rating rating-sm">
            {[...Array(5).keys()].map((i) => (
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
