var express=require('express');
var app=express();
var cors=require('cors');
app.use(cors());
const fs=require('fs');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// var userList=[]
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017'		// 默认端口号为 27017 ，如修改过请自行更改
// MongoClient.connect(
//     url,
//     {
//       // 配置 （默认写上就好）
//       useUnifiedTopology: true
//     },
//     (err, client) => {
//       if (err) {
//         console.error('mongodn connect error', err)
//         return
//       }
//       console.log('mongodb connect success')
//       var TechShopDB=client.db("TechShop");
//       TechShopDB.collection("User"). find({}).toArray(function(err, res) { // 返回集合中所有数据
//           if (err) {
//               console.error('mongodb find error', err)
//               return
//             }
//         userList=res
//         client.close() 
//       });
     
//     }
//   )

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/Computer',(req,res)=>{

    fs.readFile('./db/Computer.json','utf8',(err,data)=>{
        if(!err){
            res.json(JSON.parse(data));
        } 
    })
})
app.get('/Hardware',(req,res)=>{

    fs.readFile('./db/Hardware.json','utf8',(err,data)=>{
        if(!err){
            res.json(JSON.parse(data));
        } 
    })
})
app.get('/Netdevice',(req,res)=>{

    fs.readFile('./db/Netdevice.json','utf8',(err,data)=>{
        if(!err){
            res.json(JSON.parse(data));
        } 
    })
}) 
app.get('/Phone',(req,res)=>{

    fs.readFile('./db/Phone.json','utf8',(err,data)=>{
        if(!err){
            res.json(JSON.parse(data));
        } 
    })
})
app.get('/Television',(req,res)=>{

    fs.readFile('./db/Television.json','utf8',(err,data)=>{
        if(!err){
            res.json(JSON.parse(data));
        } 
    })
})
app.post('/login',(req,res)=>{
    obj=req.body;

    var userList=[]
    const MongoClient = require('mongodb').MongoClient
    const url = 'mongodb://localhost:27017'		// 默认端口号为 27017 ，如修改过请自行更改
    MongoClient.connect(
        url,
        {
            // 配置 （默认写上就好）
            useUnifiedTopology: true
        },
        (err, client) => {
            if (err) {
                console.error('mongodn connect error', err)
                return
            }
            var TechShopDB=client.db("TechShop");
            TechShopDB.collection("User"). find({}).toArray(function(err, result) { // 返回集合中所有数据
                if (err) {
                    console.error('mongodb find error', err)
                    return
                }
                userList=result;
                client.close()

                for(var i=0;i<userList.length;i++){
                    if(obj.userName==userList[i].username&&obj.password==userList[i].password){
                        res.send(true);
                        return
                    }
                }
                res.send(false);
                return  
            });
        
        }
    )

    
})
app.post('/register',(req,res)=>{
    obj=req.body;//obj.userName obj.password
    isInsert=false;

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(
        url,
        {
            // 配置 （默认写上就好）
            useUnifiedTopology: true
        },
        (err, client) => {
            if (err) {
                console.error('mongodn connect error', err)
                return
            }
            var TechShopDB=client.db("TechShop");
            TechShopDB.collection("User").insertOne(obj, function(err, result) {
                if (err) {
                    console.error('mongodn insert error', err);
                    res.send(isInsert);
                    return
                }
                isInsert=true;
                client.close();

                res.send(isInsert);
                return
            });
        
        }
    )

    
}) 

app.listen(3000);