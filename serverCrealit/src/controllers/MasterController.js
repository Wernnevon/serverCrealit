const mongoose = require("mongoose");
const Master = mongoose.model('Master');

module.exports = {
    // Listar todos
    async index(req, resp){
        const { page = 1 } = req.query;
        const master = await Master.paginate({}, {page: 1, limit:10});

        return resp.json(master);
    },
    // Buscar um
    async show(req, resp){
        const master = await Master.findById(req.params.id);

        return resp.json(master);
    },

    // Criar
    async store(req, resp){
        const master = await Master.create(req.body);

        return resp.json(master);
    },

    // Atualizar
    async update(req, resp){
        const master = await Master.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return resp.json(master);
    },
    
    // Deletar 
    async destroy(req, resp){
        await Master.findByIdAndRemove(req.params.id);

        return resp.send();
    },

};