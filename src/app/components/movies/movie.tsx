import Image from "next/image";
import StarIcon from "@/app/components/icons/star.icon";
import Link from "next/link";
import VideoIcon from "@/app/components/icons/video.icon";
import moment from "moment";

const Movie = ({movie, type}) => {
    const types = {
        1: <Type1 movie={movie}/>,
        2: <Type2 movie={movie}/>
    }

    return types[type]
}

const Type1 = ({movie}) => {
    return (
        <div className="card card-side mb-5" key={movie.id}>
            <figure>
                <Image width={500} height={500} className="w-72 h-72" src={movie.large_cover_image}
                       alt={movie.slug}/>
            </figure>
            <div className="card-body px-5 py-2 w-4/5 flex justify-between flex-col">
                <div>
                    <h2 className="card-title mb-2">{movie.title_english}</h2>
                    <div className="flex flex-wrap">
                        {
                            movie?.torrents?.map((torrent, i) => (
                                <div>
                                    <span className="text-gray-500">{torrent.quality}</span>
                                    {i != movie.torrents.length - 1 &&
                                        <span className="mx-2 text-gray-500">/</span>}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="card-actions flex flex-col mt-5">
                    <div>
                        {
                            movie?.genres?.map(genre => (
                                <div className="badge badge-outline mr-1 mb-1">{genre}</div>
                            ))
                        }
                    </div>
                    <div className="flex mt-5 mb-3">
                        <button className="btn btn-neutral btn-sm mr-2">{movie.year}</button>
                        <button className="btn btn-sm btn-primary btn-outline mr-2">
                            <StarIcon width="1.5em" height="1.5em"/>
                            <span>{movie.rating}</span>
                        </button>
                    </div>
                    <Link href={`/movies/${movie.id}`} className="w-full">
                        <button className="btn btn-primary w-full">Watch
                            <VideoIcon/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Type2 = ({movie}) => {
    return (
        <div className="carousel-item" key={movie.id}>
            <div className="w-[250px]">
                <Link href={`/movie/${movie.slug}`} className="relative">
                    <button className="btn btn-sm btn-primary absolute bottom-2 left-2">
                        <StarIcon width="1.5em" height="1.5em"/>
                        <span className="">{movie.rating}</span>
                    </button>
                    <Image width={500} height={500} alt={movie.slug}
                           src={movie?.large_cover_image || 'images/no-movie.svg'}
                           className="rounded-box w-auto h-auto"/>
                </Link>
                <div className="p-2">
                    <h3 className="card-title text-lg">
                        {movie.title_long}
                    </h3>
                    {
                        moment(movie.date_uploaded).format('YYYY/MM/DD') == moment().format('YYYY/MM/DD') ?
                            <div
                                className="badge badge-neutral">NEW</div> : ''
                    }
                    <div className="card-actions justify-end mt-7">
                        {
                            movie?.genres?.map(genre => (
                                <div className="badge badge-outline">{genre}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie