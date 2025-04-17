require('dotenv').config();
const MongooseURL = process.env.MongooseURL;

const mongoose = require("mongoose");
const data = require("./data");
const Quizes = require("../models/modelSchema")
main().then(res => console.log("connection was successful.")).catch((err)=> console.log("Database not connected" , err));

async function main(){
    await mongoose.connect(MongooseURL);
}

async function initDatabase (){
    await Quizes.deleteMany({});
    await Quizes.insertMany(data.data);
}

initDatabase();

