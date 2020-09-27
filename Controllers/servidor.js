const express=require("express");
const bodyParser=require("body-parser");
const DBCon=require("../Models/metodosBanco");
const path=require("path");

const Parser=bodyParser.json();
const app=express();

console.log(path.join(__dirname,"../Paginas"));

app.use("/",express.static(path.join(__dirname,"../Paginas")));

app.post("/save_cadastro",Parser,async (req,res)=>{
    DBCon.saveCadastro(req.body);
    res.redirect('/');
});

app.get("/view_cadastro",Parser,async(req,res)=>{
    let resposta=req.query.id==null?await DBCon.viewCadastro():
    await DBCon.viewCadastro(req.query.id);
    res.send(resposta,200);
});

app.post("/update_cadastro",Parser,async(req,res)=>{
    let resposta=await DBCon.updateCadastro(req.body);
    res.redirect('/');
});

app.post("/delete_cadastro",Parser,async(req,res)=>{
    let resposta=await DBCon.deleteCadastro(req.body);
    res.send(resposta,200);
});

app.listen(8081);