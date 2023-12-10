import MovieCard from "@components/movies/movieCard";

export async function generateMetadata({ params }) {
  const movie = await fetch(
    `${process.env.BASE_URL}/movies/api/${params.id}`
  ).then((res) => res.json());

  return {
    title: movie.title_english + " | FiFi Movie",
    desciption: movie.title_long,
    generator: "FiFi Movie",
    applicationName: "FiFi Movie",
    referrer: "origin-when-cross-origin",
    keywords: [...movie.genres, ...movie.slug.split("-")],
  };
}

const MovieDetails = async ({ params }) => {
  const movie = await fetch(
    `${process.env.BASE_URL}/movies/api/${params.id}`
  ).then((res) => res.json());
  return (
    <>
      {movie && Object.keys(movie).length ? (
        <MovieCard movie={movie} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MovieDetails;
