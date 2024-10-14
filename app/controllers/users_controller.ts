import User from '#models/user'
// import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async create({ request, response }: HttpContext) {
    const { email, password, name } = request.only(['email', 'password', 'name'])

    const user = await User.findBy('email', email)
    if (user) {
      return response.abort('User already exists')
    }

    // const passwordHash = await hash.make(password)

    await User.create({ email, password: password, fullName: name })

    return response.status(201).json({ message: 'User created' })
  }

  async verify({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)
    if (!user) {
      return response.abort('Invalid credentials')
    }

    // const isPasswordValid = await hash.verify(user.password, password)
    const isPasswordValid = user.password === password
    if (!isPasswordValid) {
      return response.abort('Invalid credentials')
    }

    const token = await User.accessTokens.create(user)

    return token
  }
}
