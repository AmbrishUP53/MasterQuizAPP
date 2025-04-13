const express = require("express");
const app = express();
const path = require("path");
const Mongoose = require("mongoose");
const Quizes = require("./models/modelSchema");
const wrapAsync = require("./utils/wrapAsync");
const ExpressEroor = require("./utils/ExpressError");

app.set("view-engine" , "ejs");
app.set("views" ,path.join(__dirname , "/views") );
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , "/public")))

const MongooseURL = "mongodb://127.0.0.1:27017/QuizAPP";

main().then(res => console.log("connection was successful.")).catch((err)=> console.log("Database not connected" , err));

async function main(){
    await Mongoose.connect(MongooseURL);
}
app.get("/" , (req , res)=>{
    res.render("Home.ejs");
})

app.get("/start" , (req , res , next)=>{
    res.render("start.ejs")
})

//Select category route
app.get("/select" , (req , res , next)=>{
    if(req.query.text){
        let category = req.query.text;
        res.send(category)
    }
    else{
        res.render("index.ejs");
    }
})

app.use((err , req , res ,next) =>{
    res.send("something went wrong");
})

app.listen(8080 , ()=>{
    console.log(`app is listening at port 8080`);
})