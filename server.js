const express = require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var sum =n1+num2;
    res.send("susm "+sum);

});
app.listen("3000",function(){
    console.log("server created at 3000");
});