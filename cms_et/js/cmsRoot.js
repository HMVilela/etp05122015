angular.module("cmsEntaoToma").config(function($routeProvider){
    
    $routeProvider.when("/trabalhos",{
        templateUrl:"views/trabalhos.html",
        controller: "TrabalhosCtrl"
    });
    $routeProvider.when("/configuracoes",{
        templateUrl:"views/configuracoes.html",
        controller: "ConfiguracoesCtrl"
    });
    $routeProvider.when("/adicionar-trabalho",{
        templateUrl:"views/adicionar-trabalho.html",
        controller: "AddTrabalhoCtrl"
    });
    $routeProvider.when("/login",{
        templateUrl:"views/login.html",
        controller: "LoginCtrl"
    });
    $routeProvider.when("/editar-trabalho",{
        templateUrl:"views/editar-trabalho.html",
        controller: "EditarTrabalhoCtrl"
    });
});