import MovieCarousel from "@/components/movies/movieCarousel";
import Categories from "@/components/categories/categories";

const getMovies = async () => {
  const response = await fetch(
    "https://yts.mx/api/v2/list_movies.json?with_rt_ratings=true&minimum_rating=5&sort_by=year",
    { cache: "force-cache", next: { revalidate: 3600 } }
  );
  return response.json();
};
const getDiscoverMovies = async () => {
  const response = await fetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=download_count&with_rt_ratings=true",
    { cache: "force-cache", next: { revalidate: 3600 } }
  );
  return response.json();
};

export default async function Home() {
  return (
    <>
      <Categories />
      <NewMovies />
      <DiscoverMovies />
    </>
  );
}

const NewMovies = async () => {
  const moviesData = await getMovies();
  const movies = moviesData.data.movies;
  return (
    <MovieCarousel
      seeAllLink="?with_rt_ratings=true&minimum_rating=5&sort_by=year"
      movies={movies}
      title="New Movies"
    />
  );
};

const DiscoverMovies = async () => {
  const moviesData = await getDiscoverMovies();
  const movies = moviesData.data.movies;
  return (
    <MovieCarousel
      seeAllLink="?minimum_rating=7&sort_by=download_count&with_rt_ratings=true"
      movies={movies}
      title="Discover Movies"
    />
  );
};
