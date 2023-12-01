import LoadingMovies from "@components/movies/loadingMovies";
import Movie from "@components/movies/movie";
import ADS from "@components/ADS";

const Movies = ({movies}: { movies: any[] }) => {
    return !movies.length ? (
        <LoadingMovies/>
    ) : (
        <div className="md:grid md:grid-cols-3 gap-3">
            {movies.map((movie, i) => (
                <div>
                    <ADS type={2}/>
                    <Movie type={1} movie={movie}/>
                </div>
            ))}
        </div>
    );
};

export default Movies;
