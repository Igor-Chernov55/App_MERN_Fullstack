import Post from '../models/Post.js'
import User from '../models/Post.js'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

//Create Post
export const createPost = async (req, res) => {
    try {
        const {title, text} = req.body
        const user = await User.findById(req.userId)

        if (req.files) {
            let fileName = Date.now().toString() + req.files.image.name
            const _dirname = dirname(fileURLToPath(import.meta.url))
            req.files.image.mv(path.join(_dirname, '..', 'uploads', fileName))

            const newPostWithImage = new Post({
                username: user.username,
                title,
                text,
                imgUrl: fileName,
                author: req.user.id
            })

            await newPostWithImage.save()
            await User.findByIdAndUpdate(req.userId, {
                $push: {posts: newPostWithImage}
            })

            return res.json(newPostWithImage)
        }


        const newPostWithoutImage =  new Post({
            username: user.username,
            title,
            text,
            imgUrl: '',
            author: req.userId,
        })

        await newPostWithoutImage.save(req.userId, {
            $push: {posts: newPostWithoutImage}
        })

        return res.json(newPostWithoutImage)

    } catch {
        res.json({message: 'Что-то пошло не так'})
    }
}
