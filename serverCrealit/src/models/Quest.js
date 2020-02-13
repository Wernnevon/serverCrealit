const mongoose = require('mongoose');
const mongoosePaginate = require ("mongoose-paginate");

const QuestSchema = new mongoose.Schema({
    quest:{
        type: String,
        required: true,
    },
    choose:{
        type: [String],
        require: true,
    },
    response:{
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

QuestSchema.plugin(mongoosePaginate);

mongoose.model('Quest', QuestSchema);