import mongoose from 'mongoose';

interface SuperStar {
    rank : Number,
    name : String,
    matches : Number,
    won : Number,
    loss : Number,
    height : Number,
    weight : Number,
    chest : Number,
    biceps : Number,
    signature : String,
    poster_url : String
}

const superStarSchema = new mongoose.Schema<SuperStar>({
    rank : {
        type : Number,
        required : true, 
        unique : true
    },
    name : {
        type : String,
        required : true, 
        unique : true
    },
    matches : {
        type : Number,
        required : true, 
        unique : false
    },
    won : {
        type : Number,
        required : true, 
        unique : false
    },
    loss : {
        type : Number,
        required : true, 
        unique : false
    },
    height : {
        type : Number,
        required : true, 
        unique : false
    },
    weight : {
        type : Number,
        required : true, 
        unique : false
    },
    chest : {
        type : Number,
        required : true, 
        unique : false
    },
    biceps : {
        type : Number,
        required : true, 
        unique : false
    },
    signature : {
        type : String,
        required : true, 
        unique : false
    },
    poster_url : {
        type : String,
        required : true, 
        unique : false
    }
})

export const SuperStar_Model = mongoose.model('superstar', superStarSchema);