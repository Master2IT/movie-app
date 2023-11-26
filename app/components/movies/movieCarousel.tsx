import Link from "next/link";
import Movie from "@/components/movies/movie";

const MovieCarousel = ({
  title,
  movies,
  seeAllLink,
}: {
  title: string;
  movies: any[];
  seeAllLink: string;
}) => {
  return (
    <div className="my-10">
      <div className="flex items-center justify-between">
        <h1 className="mb-2">{title}</h1>
        <Link href={`/movies/${seeAllLink || ""}`}>
          <button className="btn btn-secondary btn-xs normal-case">
            See all
          </button>
        </Link>
      </div>
      <div className="carousel carousel-center w-full md:overflow-auto p-4 space-x-4 rounded-box">
        {movies?.map((movie) => (
          <Movie movie={movie} type={2} />
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
