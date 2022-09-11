import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const register = async (request, response) => {
    try {
        const { username, password } = request.body

        const isUsed = await User.findOne({ username } )

        if (isUsed) {
            return response.status(402).json({
                message: `Данный ${username} уже занят`
            })
        }

        // Генерация хэша
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash
        })

        // Сохраняем пароль
        await newUser.save()

        response.json({
            newUser,
            message: 'Регистрация успешно проведена'
        })
    }
    catch (e) {
        response.json({
            message: 'Ошибка при создании пользователя'
        })
    }
}
// Login user

export const login = async (request, response) => {
    try {

    }
    catch (e) {

    }
}
// Get Me
    export const getMe = async (request, response) => {
        try {

        }
        catch (e) {

        }
    }
