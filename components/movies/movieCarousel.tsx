import Link from "next/link";
import Movie from "@components/movies/movie";

const MovieCarousel = ({
                           title,
                           movies,
                           seeAllLink,
                           className
                       }: {
    title: string;
    movies: any[];
    seeAllLink?: string;
    className?: string
}) => {
    return (
        <div className={`mt-10 ${className}`}>
            <div className="flex items-center justify-between mb-2">
                <h1>{title}</h1>
                {
                    seeAllLink && <Link href={`/movies/${seeAllLink || ""}`}>
                        <button className="btn btn-ghost btn-xs normal-case">
                            See all
                        </button>
                    </Link>
                }
            </div>
            <div className="carousel carousel-center w-full md:overflow-auto p-4 space-x-4 rounded-box">
                {movies?.map((movie) => (
                    <Movie movie={movie} type={2}/>
                ))}
            </div>
        </div>
    );
};

export default MovieCarousel;
