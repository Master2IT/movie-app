import {model, models, Schema} from "mongoose";

const MovieSchema = new Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    slug: {
        type: String,
    },
    imdb_code: {
        type: String,
    },
    year: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    genres: {
        type: Array,
    },
    summary: {
        type: String,
    },
    language: {
        type: String,
    },
    mpa_rating: {
        type: String,
    },
    image: {
        type: String,
    },
    torrents: {
        type: Array,
    },
})

const Movie = models.Movie || model('Movie', MovieSchema)

export default Movie