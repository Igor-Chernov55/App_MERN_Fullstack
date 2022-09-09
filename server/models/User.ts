import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        posts: [{
            //Здесь ссылка на schema с постами
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post' // название ссылки
        }]
    },
    //Возможность отслеживания истории поста
    {timestamps: true}
)

export default mongoose.model('User', UserSchema)
