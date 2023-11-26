import LoadingMovies from "@/components/movies/loadingMovies";
import Movie from "@/components/movies/movie";

const Movies = ({ movies }: { movies: any[] }) => {
  return !movies.length ? (
    <LoadingMovies />
  ) : (
    <div className="md:grid md:grid-cols-3 gap-3">
      {movies.map((movie, i) => (
        <div>
          <Movie type={1} movie={movie} />
          {i != movies.length - 1 && (
            <div className="divider md:divider-horizontal"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Movies;
