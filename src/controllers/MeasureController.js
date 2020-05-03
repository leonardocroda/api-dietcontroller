const conn = require('../database/connection');
module.exports = {
    async create(req, res) {
        const { weight, height, update_date } = req.body;
        const user_id = req.headers.authorization;

        await conn('measures').insert({
            weight,
            height,
            update_date,
            user_id
        });

        return res.status(201).send();
    },

    async index(req, res) {
        const measures = await conn('measures').select('*');

        return res.json(measures);
    },

    async specificUserMeasure(req, res) {
        const { user_id } = req.params;
        const measures = await conn('measures').where('user_id', user_id).select('*');
        return res.json(measures);

    },

    async delete(req, res) {
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const measure = await conn('measures').
            where('id', id).
            select('user_id').
            first();

        if (measure.user_id != user_id) {
            return res.status(401).json({ error: "Operation not permitted" });
        }
        await conn('measures').where('id', id).delete();
        return res.status(204).send();
    }
};