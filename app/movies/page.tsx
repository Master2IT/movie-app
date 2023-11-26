import Filters from "@/components/filters";
import MovieList from "@components/movies/MovieList";
const MoviesPage = () => {
  return (
    <>
      <Filters />
      <div className="divider"></div>
      <MovieList />
    </>
  );
};

export default MoviesPage;
