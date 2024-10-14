// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import Integration from '#models/integration'

export default class IntegrationsController {
  async create({ request, response, auth }: HttpContext) {
    console.log('Creating integration')

    const { integrationType, connectionDetails } = request.only([
      'integrationType',
      'connectionDetails',
    ])

    const user = auth.getUserOrFail()

    await Integration.create({ integrationType, connectionDetails, userId: user.id })

    return response.status(201).json({ message: 'Integration created' })
  }

  async get({ response, auth }: HttpContext) {
    console.log('Getting integrations')

    const user = auth.getUserOrFail()

    const integrations = await Integration.query().where('userId', user.id).select('*')

    return response.status(200).json(integrations)
  }

  async delete({ request, response, auth }: HttpContext) {
    console.log('Deleting integration')

    const { integrationType } = request.only(['integrationType'])

    const user = auth.getUserOrFail()

    await Integration.query()
      .where('integrationType', integrationType)
      .where('userId', user.id)
      .delete()

    return response.status(200).json({ message: 'Integration deleted' })
  }
}
