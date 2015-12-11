angular.module("cmsEntaoToma").controller("LoginCtrl",function($scope,$http,$location,$rootScope){

    $scope.logar = function(login){
        var dados = {
            login   : login.login,
            senha   : login.senha
        };
        $http.post("php/verificar-login.php", dados).success(function(resposta){
           if(resposta.status === true){
               console.log("Bem-vindo, " + resposta.usuario);
               $location.path("/trabalhos");
               $rootScope.usuarioAtivo = resposta.usuario;
               $rootScope.mostrarNavegacao = true;
           }
            else{
                $scope.erroDeLogin = resposta.info;
            }
        });
    };



});