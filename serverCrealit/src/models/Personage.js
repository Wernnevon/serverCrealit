const mongoose = require('mongoose');
const mongoosePaginate = require ("mongoose-paginate");

const PersonageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        require: true,
    },
    adventure:{
        type: String,
        require: true,
    },
    criationDate:{
        type: Date,
        default: Date.now,
    }, 
});

PersonageSchema.plugin(mongoosePaginate);

mongoose.model('Personage', PersonageSchema);