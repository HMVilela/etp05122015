<?php 
	include("config.php");
    $resposta = array();
    $ARQUIVOS = file_get_contents("php://input");
    $parametros = json_decode($ARQUIVOS); 
    $login       = $parametros->login;
    $senha       = $parametros->senha;
    $login = (isset($login) ? $login : "login");
    $senha = (isset($senha) ? $senha : "senha");
  //  echo "usuario: " . $email . " senha: " .  $senha . " - ";
	$link = mysqli_connect($HOST,$USUARIO,$SENHA,$NOMEDOBD) or die(mysqli_error());
    $sql = "select * from login where login='" . $login . "' and senha='" . $senha . "'";
	$resultado = mysqli_query($link,$sql);
        if(mysqli_num_rows($resultado) > 0){
            while(($linha = mysqli_fetch_array($resultado)) != false){
                $resposta['status'] = true;
                $resposta['info'] = "Logado com sucesso";
                $resposta['usuario'] = $linha[1];
            }
	   }
        else{
            $resposta['status'] = false;
            $resposta['info'] = "O usuário informado não está cadastrado";
            $resposta['usuario'] = "";
        }
    //echo "Resultado: " . mysqli_num_rows($resultado);
	echo json_encode($resposta);
    mysqli_free_result($resultado);	
    mysqli_close($link);
   
	
?>