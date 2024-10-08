// import type { HttpContext } from '@adonisjs/core/http'

export default class IntegrationsController {
  create(body: Object) {
    console.log('Creating integration', body)
  }

  get() {
    console.log('Getting integration')
  }

  delete() {
    console.log('Deleting integration')
  }
}
