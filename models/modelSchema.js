const { default: mongoose, Schema } = require("mongoose");
let QuizSchema = mongoose.Schema({
    question :{
        type : String ,
        required : true ,
    },
    options : {
        type : [],
        required : true ,
    },
    correct_option : {
        type : String ,
        required : true ,
    },
    explanation : {
        type : String,
        required : true ,
    },
    category :{
        type : String,
        required : true,
    },
    difficulty : {
        type : String,
        default : "easy"
    }
})

let Quizes = mongoose.model("Quizes" , QuizSchema);

module.exports = Quizes ;