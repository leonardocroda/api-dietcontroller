exports.up = function (knex) {
    return knex.schema.createTable('measures', function (table) {
        table.increments();
        table.integer('weight').notNullable();
        table.integer('height').notNullable();
        table.datetime('update_date').notNullable();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('measures');
};
