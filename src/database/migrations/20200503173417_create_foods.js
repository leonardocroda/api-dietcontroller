
exports.up = function (knex) {
    return knex.schema.createTable('foods', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.float('carb').notNullable();
        table.float('protein').notNullable();
        table.float('fat').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('foods');
};
