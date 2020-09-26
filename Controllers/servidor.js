const express=require("express");
const bodyParser=require("body-parser");
const DBCon=require("../Models/metodosBanco");

const Parser=bodyParser.json();
const app=express();

app.post("/save_cadastro",Parser,(req,res)=>{
        DBCon.saveCadastro(req.body);
        res.send("Cadastrado",201);
})
app.listen(5003);