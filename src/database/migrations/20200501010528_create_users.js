exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.date('birth').notNullable();
        table.string('gender').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('users');
};
