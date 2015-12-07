function contemArroba(valor){
            var l = valor.length;
            for(var c = 0; c < l; c++){
                if(valor.charAt(c) == '@'){return true;}
            }
            return false;
}

function inicializaPagina(){
    
    $("#telefone").mask("(99)99999-9999");
    $("#enviar").click(function(){
                var nome = $("#nome").val();
                var email = $("#email").val();
                var telefone = $("#telefone").val();
                var mensagem = $("#mensagem").val();
                if(nome == ""){
                    $("#respostaDoEnvio").text("Nome inválido");
                    setTimeout(function(){
                        $("#respostaDoEnvio").text("");
                            
                    },5000);
                    return;
                }
                if((!contemArroba(email)) || (email == "")){
                    $("#respostaDoEnvio").text("Endereço de e-mail inválido");
                    setTimeout(function(){
                        $("#respostaDoEnvio").text("");
                            
                    },5000);
                    return;
                }
                 
                if(telefone.length < 14){
                    $("#respostaDoEnvio").text("Preencha corretamente o telefone");
                    setTimeout(function(){
                        $("#respostaDoEnvio").text("");
                            
                    },5000);
                    return;
                }
                if(mensagem == ""){
                    $("#respostaDoEnvio").text("Preencha a mensagem");
                    setTimeout(function(){
                        $("#respostaDoEnvio").text("");
                            
                    },5000);
                    return;
                }
                $.post( "php/enviar_email.php", 
                       {
                        nome : nome,
                        email: email,
                        telefone : telefone,
                        mensagem : mensagem
                       }
                )
                .done(function(retorno) {
                    console.log(retorno);
                    var resposta = JSON.parse(retorno);
                    if(resposta.status == true){
                        $("#respostaDoEnvio").text(resposta.info + "");
                        $("#email").val("");
                        setTimeout(function(){
                            $("#respostaDoEnvio").text("");
                            
                        },10000);
                    }
                    else{
                        $("#respostaDoEnvio").text(resposta.info);
                        setTimeout(function(){
                            $("#respostaDoEnvio").text("");  
                        },10000);
                        
                    }
                });
            });
}