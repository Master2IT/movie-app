import {connectToDB} from "@utils/database";

export const GET = async (req) => {
    const searchParams = new URLSearchParams(req.nextUrl.searchParams);
    const sort_by = searchParams.get('sort_by') || null;
    const minimum_rating = searchParams.get('minimum_rating') || null;
    const with_rt_ratings = searchParams.get('with_rt_ratings') || true;
    const page = searchParams.get('page') || 1;
    const genre = searchParams.get('genre') || null;

    try {
        await connectToDB()
        const params: any = {
            with_rt_ratings,
            page,
        }
        if (sort_by) params["sort_by"] = sort_by
        if (minimum_rating) params["minimum_rating"] = minimum_rating
        if (genre) params["genre"] = genre

        const url = new URLSearchParams(params)
        console.log(url)
        const moviesResponse = await fetch(`https://yts.mx/api/v2/list_movies.json?${url}`);
        const moviesData = await moviesResponse.json()
        const moviesList: any[] = moviesData.data.movies;

        if (!moviesList?.length) return new Response(JSON.stringify([]), {status: 200});

        // for (const movie of moviesList) {
        //     const movieExists = await Movie.findOne({id: movie.id});
        //
        //     if (!movieExists) {
        //         await Movie.create({
        //             id: movie.id,
        //             title: movie.title,
        //             slug: movie.slug,
        //             imdb_code: movie.imdb_code,
        //             year: movie.year,
        //             rating: movie.rating,
        //             genres: movie.genres,
        //             summary: movie.summary || null,
        //             language: movie.language,
        //             mpa_rating: movie.mpa_rating || null,
        //             image: movie.image,
        //             torrents: movie.torrents
        //         })
        //     }
        // }

        // const movies = await Movie.find({}, {}, {skip: page == 1 ? 0 : +page * 10, limit: 10}).populate("like")

        return new Response(JSON.stringify(moviesList), {status: 200});

    } catch (error) {
        return new Response(error, {status: 500});
    }
}