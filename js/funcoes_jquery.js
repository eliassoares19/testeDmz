//$(document).ready(function () {
//
//    //alert('teste');
//
//});
/*
function btnGetTable(){
    
      $.post(path+'home/getTable', {//localhost/lab/home/getTable
            login: 'jeff'
        },
        function call_back(data) {
            //alert(data);
            if(data !== ''){
                $('#table').val(data);
//                var d = data.split('|');
//                var login = d[0];
//                var senha = d[1];
//                
//                $('#lblSenha').html(senha);
                //alert(data);
            }
            
        });
}

function getLoginInput(){
    var login = $('#login').val();
    
    $('#login2').val(login);
}

function GetIndicadorReincidencias(){
    
    $('#metaAlcancada_5').html(pathLoadingTbl);
    $('#acumulado_5').html(pathLoadingTbl);

    $.post(path+'indicadores/getReincidencias', {
            getIndReincidencia: 1
        },
        function call_back(data) {
            
            if(data !== ''){
                var d = data.split('|');
                var total         = d[0];
                var acumulado     = d[1];
                var metaAlcancada = d[2];
                $('#metaAlcancada_5').html(metaAlcancada);
                $('#acumulado_5').html(acumulado);
                //alert(data);
            }
            
        });
    
}*/
//
//
//
////trim completo
//function trim_manual(str) {
//    return str.replace(/^\s+|\s+$/g, "");
//}
//
////left trim
//function ltrim_manual(str) {
//    return str.replace(/^\s+/, "");
//}
//
////right trim
//function rtrim_manual(str) {
//    return str.replace(/\s+$/, "");
//}

//J/Função para atualizar a view
function ordenar(valor){
    //alert(valor);
    $.post(path+'home/ordenar_tabela', {
            tipoOrdenacao: valor
        },
        function call_back(data) {
            
            //alert(data);
            $('#tabela').html(data);
        });
}

//J/Habilita os campos para edição
function habilitaEdicao(id){
    var nome = "nome"+id;
    var email = "email"+id;
    var setor = "setor"+id;
 
    document.getElementById(nome.toString()).contentEditable = true;
    document.getElementById(email.toString()).contentEditable = true;
    document.getElementById(setor.toString()).contentEditable = true;
    
}

//J/Altera ícone da edição e de salvar
function alteraIcone(id, numID){
    var icone = "#icone"+id;
    var classeAtual = $(icone).attr("class");//Pega o valor atual da classe
    //console.log(classeAtual);
    
    if(classeAtual === "glyphicon glyphicon-pencil"){
        alert("Linha habilitada para edição.");
        $(icone).removeClass("glyphicon glyphicon-pencil").addClass("glyphicon glyphicon-floppy-disk");
    }
    else{
        $(icone).removeClass("glyphicon glyphicon-floppy-disk").addClass("glyphicon glyphicon-pencil");
        salvaAlteracao(id, numID);
        
    }    
}

//J/Envia para Home os dados atualizados pela edição
function salvaAlteracao(id, numID){
    var nome = "#nome"+id;
    var email = "#email"+id;
    var setor = "#setor"+id;

    //var conteudo = $("#nome1").text();
    
    var conteudoNome = $(nome).text();
    var conteudoEmail = $(email).text();
    var conteudoSetor = $(setor).text();
    
//    console.log("ID: "+numID);
//    console.log("Nome: "+conteudoNome);
//    console.log("Email: "+conteudoEmail);
//    console.log("Setor: "+conteudoSetor);
    
    $.post(path+'home/atualizaDados', {
            Nome: conteudoNome,
            Email: conteudoEmail,
            Setor: conteudoSetor,
            Id: numID
        },
        function call_back(data) {
           //alert(data);
        });
}