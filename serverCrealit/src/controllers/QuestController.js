const mongoose = require("mongoose");
const Quest = mongoose.model('Quest');

module.exports = {
    // Listar todos
    async index(req, resp){
        const { page = 1 } = req.query;
        const quest = await Quest.paginate({}, {page: 1, limit:10});

        return resp.json(quest);
    },
    // Buscar um
    async show(req, resp){
        const quest = await Quest.findById(req.params.id);

        return resp.json(quest);
    },

    // Criar
    async store(req, resp){
        const quest = await Quest.create(req.body);

        return resp.json(quest);
    },

    // Atualizar
    async update(req, resp){
        const quest = await Quest.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return resp.json(quest);
    },
    
    // Deletar 
    async destroy(req, resp){
        await Quest.findByIdAndRemove(req.params.id);

        return resp.send();
    },

};