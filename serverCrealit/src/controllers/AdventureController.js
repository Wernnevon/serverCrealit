const mongoose = require("mongoose");
const Adventure = mongoose.model('Adventure');

module.exports = {
    // Listar todos
    async index(req, resp){
        const { page = 1 } = req.query;
        const adventure = await Adventure.paginate({}, {page: 1, limit:10});

        return resp.json(adventure);
    },
    // Buscar um
    async show(req, resp){
        const adventure = await Adventure.findById(req.params.id);

        return resp.json(adventure);
    },

    // Criar
    async store(req, resp){
        const adventure = await Adventure.create(req.body);

        return resp.json(adventure);
    },

    // Atualizar
    async update(req, resp){
        const adventure = await Adventure.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return resp.json(adventure);
    },
    
    // Deletar 
    async destroy(req, resp){
        await Adventure.findByIdAndRemove(req.params.id);

        return resp.send();
    },

};