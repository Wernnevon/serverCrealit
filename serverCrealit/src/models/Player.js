const mongoose = require('mongoose');
const mongoosePaginate = require ("mongoose-paginate");

const PlayerSchema = new mongoose.Schema({
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
    class:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    dateSubscribe:{
        type: Date,
        default: Date.now,
    },
    rank:{
    	type: Number,
	    default: 0,
    } 
});

PlayerSchema.plugin(mongoosePaginate);

mongoose.model('Player', PlayerSchema);
