const express = require("express")
const cors = require("cors")
let object = express()
let {MongoClient,ObjectId}=require("mongodb")
let mongo_url="mongodb://localhost:27017"
let mongoclient=new MongoClient(mongo_url)
const database="get"
const coll ="getMethod"
object.use(cors());
object.use(express.json())

object.get("/method",async(req,res)=>{

    await mongoclient.connect()

    const db=mongoclient.db(database)

    const collection=db.collection(coll)

    var userdata = await collection.find().toArray()
    // console.log(JSON.stringify(userdata))
// res.send("recieved")

 console.log(req.body) //http://localhost:2333/method
 res.send({
    status:true,
    insert:userdata


})
// res.json(userdata)
})

object.delete("/removeuser/:id",async(req,res)=>{

    await mongoclient.connect()

    const db=mongoclient.db(database)

    const collection=db.collection(coll)

   var  result= await collection.deleteOne({_id: new ObjectId(req.params.id)})
console.log(result)

res.json({
  ok: true,
  result : "insert succesfully"
})

})

object.get("/getuserinfo/:id",async(req,res)=>{

    var id=req.params.id;

    await mongoclient.connect()

    const db=mongoclient.db(database)

    const collection=db.collection(coll)

    var data = await collection.findOne({_id: new ObjectId(id)})

    // console.log(data)//http://localhost:2333/getuserinfo

    // res.json({
    //     ok:true,
    //     result:data,
    // })

    if(!data){
        res.json({
        
            ok:false,
            result:"NO USER EXIST WITH PROVIDEDID"
        })
    }else{
        res.json({
            ok:true,
            result:data
        })
    }
    
})

object.put("/userUpdate",async(req,res)=>{
    var newdata=req.body;
    var id=newdata._id
    delete newdata._id
    console.log(newdata)
    await mongoclient.connect()

    const db=mongoclient.db(database)

    const collection=db.collection(coll)

    var data= await collection.updateOne({_id:new ObjectId(id)},{$set:newdata})
    res.send("update user")
})//http:localhost:2333/userUpdate

object.listen(2333,()=>{
    console.log("server is created")  
})