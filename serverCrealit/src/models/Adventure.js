const mongoose = require('mongoose');
const mongoosePaginate = require ("mongoose-paginate");
const AdventureSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    personages:{
        type: String,
        require: true,
    },
    creationDate:{
        type: Date,
        default: Date.now,
    }, 
});
// adicionar quem criou;
AdventureSchema.plugin(mongoosePaginate);

mongoose.model('Adventure', AdventureSchema);