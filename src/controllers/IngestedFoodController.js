const conn = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { user_id, food_id, amount, time } = req.body;
        await conn('ingested_foods').insert({ user_id, food_id, amount, time });
        return res.status(201).send();
    },

    async index(req, res) {
        const users = await conn('ingested_foods').select('*');
        res.json(users);
    },

    async specificUserIngestions(req, res) {
        const { user_id } = req.params;
        const measures = await conn('ingested_foods').where('user_id', user_id).select('*');
        return res.json(measures);

    },

};