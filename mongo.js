const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://raunakghosh1112:1234@cluster0.83wsbbj.mongodb.net/test")
.then(()=>{
    console.log("Connected to Mongo")
}).catch(()=>{
    console.log("Failed to connect to Mongo")
})

const newSchema = new mongoose.Schema({
    email:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    }
})

const collection = mongoose.model('collection',newSchema)
module.exports=collection