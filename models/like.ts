import {model, models, Schema} from "mongoose";

const LikeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: "Movie",
    },
})

const Like = models.Like || model('Like', LikeSchema)

export default Like