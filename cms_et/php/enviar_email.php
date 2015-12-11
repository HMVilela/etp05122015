<?php

    $resposta = array();
    $nome       = (isset( $_POST["nome"])? $_POST["nome"] : "nome...");
    $email      = (isset( $_POST["email"])? $_POST["email"] : "email...");
    $telefone   = (isset( $_POST["telefone"])? $_POST["telefone"] : "telefone...");
    $mensagem   = (isset( $_POST["mensagem"])? $_POST["mensagem"] : "mensagem...");

    $destinatario = "henrique.dev01@gmail.com";

    $headers = "MIME-Version: 1.1\n";
    $headers .= "Content-type: text/html; charset=utf-8\n";
    $headers .= "From: $email \r\n"; // remetente
    $headers .= "Return-Path: henrique.marrom@gmail.com\r\n"; 

    $corpo  = "<h3>$nome</h3>";
    $corpo .= "<h4  style='color:#888888;'>$email</h4>";
    $corpo .= "<h4  style='color:#888888;' >$telefone</h4>";
    $corpo .= "<p>$mensagem</p>";
    
    $envio = mail($destinatario, "Contato de entaotoma.com.br",$corpo ,$headers);
    if($envio){
        $resposta["status"] = true;
        $resposta["info"]   = "Obrigado pelo contato.";
    }
    else{
        $resposta["status"] = false;
        $resposta["info"]   = "Ocorreu um erro ao enviar o e-mail";
    }
    echo json_encode($resposta);

?>