import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Integration extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({columnName: 'integration_type'})
  declare integrationType: string

  @column({columnName: 'connection_details'})
  declare connectionDetails: JSON

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}