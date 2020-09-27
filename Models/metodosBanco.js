mySql=require("mysql");

const con=mySql.createConnection({
    host:"127.0.0.1",
    port:"3308",
    database:"desafio_node",
    user:"atividadesWeb",
    password:"df2"
});


function saveCadastro(cadastro){
    let query=`insert into funcionarios(nome,cpf,telefone,email,id_departFK)
    values("${cadastro.txtNome}",${cadastro.txtCPF},"${cadastro.txtTelefone}","${cadastro.txtEmail}",${cadastro.slcDepart})`;
    con.query(query,(err)=>{
        if(err) throw err;
        console.log("Cadastro realizado com sucesso.");
    });
}

function updateCadastro(cadastro){  
    let query=`update funcionarios set nome="${cadastro.txtNome}",cpf=${cadastro.txtCPF},email="${cadastro.txtEmail}",id_departFK=${cadastro.slcDepart} where id_func=${cadastro.hdnId}`;

    con.query(query,(err)=>{
        if(err) throw err;
        console.log("Update realizado com sucesso!")
    });
}

async function viewCadastro(id){
    let query="select * from View_inicio";
    if (id !=null) query+=` where id_func=${id}`;
    return new Promise((resolve,reject)=>{
        con.query(query,(err,res)=>{
        if(err) throw err;
        resolve(res);
    })});
    
}

function deleteCadastro(cad){
    let query=`delete from funcionarios where id_func=${cad.id}`
    con.query(query,(err)=>{
        if(err) throw err;
        console.log("Cadastro deletado com sucesso!");
    })
}

exports.saveCadastro=saveCadastro;
exports.deleteCadastro=deleteCadastro;
exports.viewCadastro=viewCadastro;
exports.updateCadastro=updateCadastro;
