const { default: mongoose, Schema } = require("mongoose");
let QuizSchema = mongoose.Schema({
    category :{
        type : String,
        required : true,
    },
    question :{
        type : String ,
        required : true ,
    },
    options : {
        type : [],
        required : true ,
    },
    answer : {
        type : String ,
        required : true ,
    },
   
})

let Quizes = mongoose.model("Quizes" , QuizSchema);

module.exports = Quizes ;