const conn = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { name, birth, gender, email, password } = req.body;
        await conn('users').insert({ name, birth, gender, email, password });
        return res.status(201).send();
    },

    async index(req, res) {
        const users = await conn('users').select('*');
        res.json(users);
    },

    async specificUser(req, res) {
        const { id } = req.params;
        const user = await conn('users').where('id', id).select('*');
        return res.json(user);
    },

};