import {connectToDB} from "@utils/database";

export const GET = async (req, {params}) => {
    const movieId = params.id;

    try {
        const moviesResponse = await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${movieId}`);
        const moviesData = await moviesResponse.json()
        const moviesList: any[] = moviesData.data.movies;

        if (!moviesList?.length) return new Response(JSON.stringify([]), {status: 200});

        return new Response(JSON.stringify(moviesList), {status: 200});

    } catch (error) {
        return new Response(error, {status: 500});
    }
}