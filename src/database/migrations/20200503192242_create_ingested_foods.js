exports.up = function (knex) {
    return knex.schema.createTable('ingested_foods', function (table) {
        table.increments();
        table.integer('user_id').unsigned();
        table.integer('food_id').unsigned();
        table.integer('amount').notNullable();
        table.datetime('time').notNullable();
        table.foreign('user_id').references('id').inTable('users')
        table.foreign('food_id').references('id').inTable('foods')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ingested_foods');

};
