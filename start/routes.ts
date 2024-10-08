/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const IntegrationsController = () => import('#controllers/integrations_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/signup', [UsersController, 'create'])

router.post('/login', [UsersController, 'verify'])

router.post('/integrations', [IntegrationsController, 'create']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.get('/integrations', [IntegrationsController, 'get']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.delete('/integrations/:id', [IntegrationsController, 'delete']).use(
  middleware.auth({
    guards: ['api'],
  })
)
