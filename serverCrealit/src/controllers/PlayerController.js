const mongoose = require("mongoose");
const Player = mongoose.model('Player');

module.exports = {
    // Listar todos
    async index(req, resp){
        const { page = 1 } = req.query;
        const player = await Player.paginate({}, {page: 1, limit:10});

        return resp.json(player);
    },
    // Buscar um
    async show(req, resp){
        const player = await Player.findById(req.params.id);

        return resp.json(player);
    },

    // Criar
    async store(req, resp){
        const player = await Player.create(req.body);

        return resp.json(player);
    },

    // Atualizar
    async update(req, resp){
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return resp.json(player);
    },
    
    // Deletar 
    async destroy(req, resp){
        await Player.findByIdAndRemove(req.params.id);

        return resp.send();
    },

};