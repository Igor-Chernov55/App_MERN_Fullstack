import jwt from 'bcryptjs'

export const checkAuth = (request, response, next) => {
    const token = (request.headers.authorization || '').replace(/Bearer\s?/, '')

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            request.userId = decoded.id
        } catch (e) {
            return response.join({
                message: 'Отказано в доступе'
            })
        }
    }
    else {
        return response.join({
            message: 'Отказано в доступе'
        })
    }
}
