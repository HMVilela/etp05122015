angular.module("cmsEntaoToma").controller("TrabalhosCtrl",function($scope,$location){

    $scope.addTrabalho = function(){
        $location.path("/adicionar-trabalho");
    };
     $scope.listaDeTrabalhos = [
        {url:"assets/foto10.jpg"},
        {url:"assets/foto11.jpg"},
        {url:"assets/foto10.jpg"},
        {url:"assets/foto11.jpg"}
    
    ];
    $scope.editarTrabalho = function(indice){
        console.log("Editar o trabalho " + indice);
    };


});