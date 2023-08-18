const express=require('express');
const collection=require('./mongo')
const cors=require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())


app.get("/login",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    const{email,password} = req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exists")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})




app.post("/signup",async(req,res)=>{
    const{email,password} = req.body
    const data={
        email: email,
        password: password
    }


    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exists")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})