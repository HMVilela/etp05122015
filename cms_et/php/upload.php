<?php 
    $permitidos = array(".jpg",".JPEG",".jpeg",".gif",".png", ".bmp",".mp3",".mp4");
    $resposta = array();
    if(isset($_POST)){ 
		$idDaEmpresa = "sem_id";
		if(isset($_POST["id"])){
			$idDaEmpresa =  $_POST["id"];
		}
        $nome_imagem = $_FILES['file']['name'];
        $tamanho_imagem = $_FILES['file']['size']; 
        /* captura a extensão do arquivo */ 
        $ext = strtolower(strrchr($nome_imagem,"."));
        /* faz a verificação se a extensão está entre as extensões permitidas */
        if(in_array($ext,$permitidos)){ 
            /* faz a conversão do tamanho para KB */ 
            $tamanho = round($tamanho_imagem / 1024); if($tamanho < 20000){
               //se imagem for até 1MB envia
               // $nome_temporario = md5(uniqid(time()));
               //nome que será dado a imagem 
                $tmp = $_FILES['file']['tmp_name']; 
               //caminho temporário da imagem
				$nomeDaPastaDeUsuario =  "../trabalhos/" . $idDaEmpresa;
                if(!is_dir($nomeDaPastaDeUsuario)){
                    mkdir($nomeDaPastaDeUsuario,0777);
                }		
			
                if(move_uploaded_file($tmp,$nomeDaPastaDeUsuario . "/" . $nome_imagem)){ 
                    //imprime a foto na tela
                    $resposta['status'] = true;
                    $resposta['info'] = "Sucesso";
                    $resposta["url"] = "trabalhos/". $idDaEmpresa . "/" . $nome_imagem;
				 
                }else{
                    $resposta['status'] = false;
                    $resposta['info'] = "Falha ao realizar o upload do arquivo";
                    $resposta["url"] = "";
                } 
            }else{
                    $resposta['status'] = false;
                    $resposta['info'] = "A imagem deve ter no m&aacute;ximo 2MB";
                    $resposta["url"] = "";
             } 
        }else{ 
                    $resposta['status'] = false;
                    $resposta['info'] = "Somente arquivos do tipo imagem";
                    $resposta["url"] = "";
        } 
    }else{
                    $resposta['status'] = false;
                    $resposta['info'] = "Selecione uma imagem";
                    $resposta["url"] = "";
    }
echo json_encode($resposta);
?>
