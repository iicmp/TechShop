var express=require('express');
var app=express();

const fs=require('fs');

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


app.listen(3000);