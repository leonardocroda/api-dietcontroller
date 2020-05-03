const conn = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { name, carb, protein, fat } = req.body;

        await conn('foods').insert({ name, carb, protein, fat });
        return res.status(201).send();
    },

    async index(req, res) {
        const foods = await conn('foods').select('*');
        return res.json(foods);
    },

}