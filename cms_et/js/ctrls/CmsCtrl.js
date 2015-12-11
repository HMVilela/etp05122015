angular.module("cmsEntaoToma").controller("CmsCtrl",function($scope,$location,$rootScope,geradorSerial){
    
    $rootScope.usuarioAtivo = "Usuario...";
    
    $rootScope.mostrarNavegacao = false;
    $location.path("/login");
    $scope.mostrarTrabalhos = function(){
        $location.path("/trabalhos");
    };
    $scope.mostrarConfiguracoes = function(){
         $location.path("/configuracoes");
    };
    $scope.logout = function(){
        $rootScope.usuarioAtivo = "x";
        $rootScope.mostrarNavegacao = false;
        $location.path("/login");
    };
   

});