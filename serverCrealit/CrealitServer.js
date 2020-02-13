const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Start app
const app = express();

app.use(express.json());
app.use(cors());

// Conencte mongodb
mongoose.connect("mongodb://localhost:27017/Crealit", {useUnifiedTopology:true, useNewUrlParser:true});

requireDir("./src/models");
//  Rotas
app.use("/api", require("./src/routes/routes"));

app.listen(3001);