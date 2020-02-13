const mongoose = require('mongoose');
const mongoosePaginate = require ("mongoose-paginate");

const MasterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    birthday:{
        type: Date,
        require: true,
    },
    gender:{
        type: String,
        require: true,
    },
    id:{
        type: String,
        require: true,
        default: Math.random().toString(36).substr(2, 9),
    },
    password:{
        type: String,
        require: true,
    },
    dateSubscribe:{
        type: Date,
        default: Date.now,
    }, 
});

MasterSchema.plugin(mongoosePaginate);

mongoose.model('Master', MasterSchema);