import Filters from "@components/filters";
import MovieList from "@components/movies/MovieList";

const MoviesPage = () => {
    return (
        <div className="md:px-32">
            <Filters/>
            <div className="divider"></div>
            <MovieList/>
        </div>
    );
};

export default MoviesPage;
