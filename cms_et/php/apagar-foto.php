<?php
    $resposta = array();
    $ARQUIVOS = file_get_contents("php://input");
    $parametros = json_decode($ARQUIVOS);
    $pasta   = $parametros->pasta;
    $arquivo = $parametros->url;
    $arquivo = "../" . $arquivo;

    $dir = "../trabalhos/" . $pasta;

    if(is_dir($dir)){
            if(file_exists($arquivo)){
                if(unlink($arquivo) === true){
                    $resposta['status'] = true;
                    $resposta['info'] =  "Arquivo deletado com sucesso.";
                }
                else{
                    $resposta['status'] = false;
                    $resposta['info'] =  "Erro ao deletar o arquivo " . $arquivo;
            
                }
            }
            else{
                $resposta['status'] = false;
                $resposta['info'] =  "O arquivo " . $arquivo . " não existe.";
            }
    }
    else{
        $resposta['status'] = false;
        $resposta['info'] =  "O diretório " . $dir . " não existe";
    }
    echo json_encode($resposta);
?>