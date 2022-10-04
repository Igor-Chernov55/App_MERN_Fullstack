import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Register user
export const register = async (request, response) => {
    try {
        const {username, password} = request.body

        const isUsed = await User.findOne({username})

        if (isUsed) {
            return response.status(402).json({
                message: `Пользователь с данным логином уже существует.`
            })
        }

        // Генерация хэша
        const salt = bcrypt.genSaltSync(10)
        // Хэшируем пароль
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash
        })

        const token = jwt.sign(
            {
                id: newUser._id
            },
            process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        // Сохраняем пароль
        await newUser.save()

        // Возварщаем нового пользователя с сообщением
        response.json({
            newUser,
            token,
            message: 'Регистрация успешно проведена'
        })
    } catch (e) {
        response.json({
            message: 'Ошибка при создании пользователя'
        })
    }
}

// Login user
export const login = async (request, response) => {
    try {
        const {username, password} = request.body

        const user = await User.findOne({username})

        if (!user) {
            return response.json({message: 'Пользователь с таким именем не сущетсвует в базе.'})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return response.json({
                message: 'Неверный пароль'
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        response.json({
            token, user, message: 'Успешный вход в систему'
        })

    } catch (e) {
        response.json({message: 'Ошибка при авторизации пользователя.'})
    }
}
// Get Me
export const getMe = async (request, response) => {
    try {
        const user = await User.findById(request.userId)

        if (!user) {
            return response.json({
                message: 'Пользователь не найден'
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        response.json({
            user, token
        })

    } catch (e) {
        response.json({message: 'Ошибка при авторизации пользователя.'})
    }
}
