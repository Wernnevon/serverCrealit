const express = require("express");
const routes = express.Router();

routes.get('/', (req, res)=>{
    return res.sendFile('/home/wernnevon/Documentos/Crealit/ProjetoCrealit/serverCrealit/teste.html')
});

// Rotas para Personagem;
const PersonageController = require("../controllers/PersonageController")

routes.get("/personages", PersonageController.index);
routes.get("/personage/:id", PersonageController.show);
routes.post("/personage", PersonageController.store);
routes.put("/personage/:id", PersonageController.update);
routes.delete("/personage/:id", PersonageController.destroy);

// Rotas para Aventuras
const AdventureController = require("../controllers/AdventureController")

routes.get("/adventure", AdventureController.index);
routes.get("/adventure/:id", AdventureController.show);
routes.post("/adventure", AdventureController.store);
routes.put("/adventure/:id", AdventureController.update);
routes.delete("/adventure/:id", AdventureController.destroy);

// Rotas para os professores
const MasterController = require("../controllers/MasterController")

routes.get("/master", MasterController.index);
routes.get("/master/:id", MasterController.show);
routes.post("/master", MasterController.store);
routes.put("/master/:id", MasterController.update);
routes.delete("/master/:id", MasterController.destroy);

// Rotas para os alunos
const PlayerController = require("../controllers/PlayerController")

routes.get("/player", PlayerController.index);
routes.get("/player/:id", PlayerController.show);
routes.post("/player", PlayerController.store);
routes.put("/player/:id", PlayerController.update);
routes.delete("/player/:id", PlayerController.destroy);

// Rotas para as questões
const QuestController = require("../controllers/QuestController")

routes.get("/quest", QuestController.index);
routes.get("/quest/:id", QuestController.show);
routes.post("/quest", QuestController.store);
routes.put("/quest/:id", QuestController.update);
routes.delete("/quest/:id", QuestController.destroy);

module.exports = routes;