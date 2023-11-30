import Image from "next/image";
import StarIcon from "@components/icons/star.icon";
import Link from "next/link";
import VideoIcon from "@components/icons/video.icon";
import moment from "moment";

const Movie = ({movie, type}) => {
    const types = {
        1: <Type1 movie={movie}/>,
        2: <Type2 movie={movie}/>,
    };

    return types[type];
};

const Type1 = ({movie}) => {
    return (
        <div className="card gap-5 h-72 justify-start mb-5 p-5 relative" key={movie.id} style={{
            background: `url(${movie.large_cover_image}) no-repeat center center`
        }}>
            <div className="bg-gray-900/[0.9] w-full h-full absolute inset-0 m-auto z-1 rounded-xl"></div>
            <div className="z-10 flex gap-5">
                <figure>
                    <Image
                        width={500}
                        height={500}
                        className="w-44 h-[11.5em] object-fill rounded-md"
                        src={movie.large_cover_image}
                        alt={movie.slug}
                    />
                </figure>
                <div className="card-body p-0 w-4/5 flex flex-col">
                    <div>
                        <h2 className="card-title max-h-12 text-[17px] overflow-hidden flex items-start">{movie.title_english.slice(0, 15)} {movie.title_english.length > 15 && "..."}</h2>
                        <div className="flex flex-wrap">
                            {movie?.torrents?.map((torrent, i) => (
                                <div>
                                    <span className="text-gray-500 text-xs">{torrent.quality}</span>
                                    {i != movie.torrents.length - 1 && (
                                        <span className="mx-1 text-gray-500">·</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-1 flex-wrap items-center">
                        {movie?.genres?.map((genre, i) => (
                            i < 3 && <>
                                <div className="text-xs">{genre}</div>
                                {(i != (movie?.genres?.length > 2 ? 2 : (movie?.genres?.length - 1))) && <span>·</span>}
                            </>
                        ))}
                    </div>
                    <div className="flex">
                        <button className="btn btn-neutral btn-xs mr-2">
                            {movie.language}
                        </button>
                        <button className="btn btn-neutral btn-xs">
                            {movie.year}
                        </button>
                    </div>
                    <div className="flex">
                        <button className="btn btn-sm btn-primary btn-outline px-5">
                            <StarIcon width="1.5em" height="1.5em"/>
                            <span>{movie.rating}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-actions flex flex-col z-10">
                <Link href={`/movies/${movie.id}`} className="w-full">
                    <button className="btn btn-primary w-full">
                        Watch
                        <VideoIcon/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

const Type2 = ({movie}) => {
    return (
        <div className="carousel-item" key={movie.id}>
            <div className="w-[250px]">
                <Link href={`/movies/${movie.id}`} className="relative">
                    <div className="absolute bottom-2 left-2 flex gap-2">
                        <button className="btn btn-sm btn-primary">
                            <StarIcon width="1.5em" height="1.5em"/>
                            <span className="">{movie.rating}</span>
                        </button>
                        <button className="btn btn-sm btn-primary bg-red-100 text-red-500">
                            {
                                movie.isLiked ? <>
                                        <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#dc2626"
                                                  d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11c-.292.225-.579.445-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59c-.277-.218-.564-.438-.856-.663Z"/>
                                        </svg>
                                        Liked
                                    </> :
                                    <>
                                        <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#ef4444"
                                                  d="m12 5.5l-.54.52l.01.011l.53-.53ZM8.962 18.91l-.465.59l.465-.59Zm6.076 0l-.464-.588l.464.589Zm-8.037-2.49a.75.75 0 0 0-.954 1.16l.954-1.16Zm-4.659-3.009a.75.75 0 1 0 1.316-.72l-1.316.72Zm11.128-5.38a.75.75 0 1 0 1.06-1.062L13.47 8.03ZM2.75 9.136c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137h1.5ZM8.497 19.5c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043L8.497 19.5Zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.197-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178ZM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713h1.5Zm-8.176 9.185c-.526.415-.995.779-1.448 1.043c-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16l-.929-1.178Zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92l.93-1.177Zm-5.768-5.63a7.252 7.252 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.274l1.316-.72Zm7.812-6.66l2 1.998l1.06-1.06l-2-2l-1.06 1.061Z"/>
                                        </svg>
                                        Like
                                    </>
                            }
                        </button>
                    </div>
                    <Image
                        width={500}
                        height={500}
                        alt={movie.slug}
                        src={movie?.large_cover_image || "images/no-movie.svg"}
                        className="rounded-box w-auto h-auto"
                    />
                </Link>
                <div className="p-2">
                    <h3 className="card-title text-lg">{movie.title_long}</h3>
                    {moment(movie.date_uploaded).format("YYYY/MM/DD") ==
                    moment().format("YYYY/MM/DD") ? (
                        <div className="badge badge-neutral">NEW</div>
                    ) : (
                        ""
                    )}
                    <div className="card-actions justify-end mt-7">
                        {movie?.genres?.map((genre) => (
                            <div className="badge badge-outline">{genre}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
