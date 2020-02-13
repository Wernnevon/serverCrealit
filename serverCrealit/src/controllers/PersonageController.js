const mongoose = require("mongoose");
const Personage = mongoose.model('Personage');

module.exports = {
    // Listar todos
    async index(req, resp){
        const { page = 1 } = req.query;
        const personage = await Personage.paginate({}, {page: 1, limit:10});

        return resp.json(personage);
    },
    // Buscar um
    async show(req, resp){
        const personage = await Personage.findById(req.params.id);

        return resp.json(personage);
    },

    // Criar
    async store(req, resp){
        const personage = await Personage.create(req.body);

        return resp.json(personage);
    },

    // Atualizar
    async update(req, resp){
        const personage = await Personage.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return resp.json(personage);
    },
    
    // Deletar 
    async destroy(req, resp){
        await Personage.findByIdAndRemove(req.params.id);

        return resp.send();
    },

};