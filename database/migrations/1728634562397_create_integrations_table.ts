import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'integrations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('integration_type').notNullable()
      table.json('connection_details').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}