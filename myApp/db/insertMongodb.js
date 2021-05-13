const fs=require('fs')
const mongodb=require('mongodb')
fs.readFile('./Computer.json','utf8',(err,data)=>{
    if(!err){
        const MongoClient=mongodb.MongoClient
        const url='mongodb://localhost:27017'
        MongoClient.connect(
            url,
            {
                useUnifiedTopology:true
            },
            (err,client)=>{
                if(err){
                    console.error('mongodb connect error',err)
                    return
                }
                console.log('mongodb connect success')

                var TechShopDB=client.db("TechShop")
                TechShopDB.collection("Goods").find({}).toArray(err,)
            }
        )
    }
})


var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
