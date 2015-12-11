angular.module("AB",[]);

angular.module("AB").directive("jumbo",function(){
    return {
        restrict    :   'E',
        template :   '<div class="jumbotron" ng-transclude></div>',
        replace : true,
        transclude : true
    };

}).directive("caixa",function(){
    return {
        restrict    :   'E',
        template :   '<div class="{{classe}}" ng-transclude></div>',
        replace : true,
        transclude : true,
        scope       : {
            fluido  : '@fluido'
        },
        controller  : function($scope){
            $scope.classe = $scope.fluido == "true" ? "container-fluid" : "container";   
        }
    };

}).directive("alerta",function(){
    return {
        restrict    :   'E',
        template :   '<div class="alert alert-danger" ng-transclude></div>',
        replace : true,
        transclude:true
};

}).directive("linha",function(){
    return {
        restrict    :   'E',
        template :   '<div class="{{classe}}" ng-transclude></div>',
        replace : true,
        transclude:true,
        scope       : {
            fluido  : '@fluido'
        },
        controller  : function($scope){
            $scope.classe = $scope.fluido == "true" ? "row-fluid" : "row";   
        }
};

}).directive("coluna",function(){
    return {
        restrict    :   'E',
        template    :   '<div class="{{classeFinal}}" ng-transclude></div>',
        replace     :   true,
        transclude  :   true,
        scope       :   {
                            valor   : '=colunas',
                            aux     : '@classes'
                        },
        controller: function($scope){
                var arr = $scope.valor; //$scope.valor.split(',');
            
                var len = arr.length;
                if(len == 4){
                    var saida = "";
                    saida += "col-xs-" + arr[0] + " ";
                    saida += "col-sm-" + arr[1] + " ";
                    saida += "col-md-" + arr[2] + " ";
                    saida += "col-lg-" + arr[3] + " ";
                    $scope.classeFinal = saida + " " + ($scope.aux === undefined ? " " : $scope.aux);
                }
                else{
                    $scope.classeFinal = "col-xs-12 col-sm-12 col-md-12 col-lg-12 " + ($scope.aux === undefined ? " " : $scope.aux);
                }     
        }
    };
})
.directive("caixaCentro",function(){
    return {
        restrict    :   'E',
        template    :   "<div class='center-block' ng-transclude></div>",
        replace     :   true,
        transclude  :   true
    
    };
})
.directive("tabela",function(){
    return{
        restrict    :   'E',
        templateUrl :   "view/ab/tabela.html",
        replace     :   true,
        transclude  :   true,
        scope       :   {
                valores :   "=valores",
                clique  :   "=clique"
        
        },
        controller  :   function($scope){

        }
    };


}).directive("navHorizontal",function(){
    var escopo = {
        opcoes      : "=opcoes",
        nomeDoBotao : "=nomeDoBotao",
        fixoNoTopo  : "=topo"
    };
    var templ = '<nav class="navbar navbar-default {{posicao}}">'   + 
               '<div class="container-fluid">'      +
                   '<div class="navbar-header">'    +
                  '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data' +           '-target="#navegacao"><span class="caret"></span></button>'                    +
                   '<a class="navbar-brand" href="#">Brand</a>'+
               '</div>'                             +   
                '<div class="collapse navbar-collapse" id="navegacao">'+
                    '<ul class="nav navbar-nav">'+
                        '<li  ng-repeat="opcao in opcoes.opcoes" ><a href="#">{{opcao.nome}}</a></li>' + 
                    '</ul>'+
               '</div>';        
    return {
        restrict    :   "E",
        replace     :   true,
        template    :   templ,
        scope       :   escopo,
        controller  :   function($scope){
            $scope.posicao = (($scope.fixoNoTopo === true)? "navbar-fixed-top" : "");
        }
    };
}).directive("navVertical",function(){
    var templ = "";
    templ = '<nav class="navbar navbar-default">'   + 
               '<div class="container-fluid">'      +
                   '<div class="navbar-header">'    +
                  '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data' +           '-target="#navegacao"><span class="caret"></span></button>'                    +
                   '<a class="navbar-brand" href="#">Brand</a>'+
               '</div>'                             +   
                '<div class="collapse navbar-collapse" id="navegacao">'+
                    '<ul class="nav navbar-nav">'+
                        '<li  ng-repeat="opcao in opcoes" ><a href="#">{{opcao}}</a></li>' + 
                    '</ul>'+
               '</div>';        
    var escopo = {
        opcoes      : "=opcoes",
        nomeDoBotao : "=nomeDoBotao"
    };
    return {
        restrict    :   "E",
        replace     :   true,
        template    :   templ,
        scope       :   escopo,
        controller  :   function($scope){
            //console.log($scope.opcoes);
        }
    };
}).directive("menuSanfona",function(){
   
    var escopo = {
        valores      : "=valores",
        clicouNaSubCategoria : "=funcao"
    };
    return{
        restrict        :   "E",
        replace         :   true,
        templateUrl     :   "view/ab/menusanfona.html",
        scope           :   escopo,
        controller      :   function($scope){
            $scope._index = $scope.valores.length;
            
            $scope.selecionarCategoria = function(index){
                $scope._index = index;
              //  console.log(index);
            };
            $scope.selecionarSubCategoria = function(index){
            
            };
            $scope.estaSelecionado = function(index){
               // console.log("esta selecionado ? " + index);
                return $scope._index === index;
            };
        },
        link : function(scope,elemento,atribs){
            
        }
    };
}).directive("menuSanfona3Niveis",function(){
   
    var escopo = {
        valores      : "=valores",
        clicouNoFilhoDaSubCategoria : "=funcao"
    };
    return{
        restrict        :   "E",
        replace         :   true,
        templateUrl     :   "view/ab/menu-sanfona-3-niveis.html",
        scope           :   escopo,
        controller      :   function($scope){
            $scope._index = $scope.valores.length;
            $scope._indexDaSubCategoria = 100;
            
            $scope.selecionarCategoria = function(index){
                $scope._index = index;
                $scope._indexDaSubCategoria = 100;
            };
            $scope.clicouNaSubCategoria = function(index){
                $scope._indexDaSubCategoria = index;
                
            };
            $scope.mostraFilhoDaSubCategoria = function(index){
                return $scope._indexDaSubCategoria === index;
            };
            $scope.estaSelecionado = function(index){
               // console.log("esta selecionado ? " + index);
                return $scope._index === index;
            };
        },
        link : function(scope,elemento,atribs){
            console.log(elemento);
        }
    };
}).directive("formulario",function(){
    return {
        restrict    :   "E",
        resplace    :   true,
        template    :   '<form role="form" ng-transclude></form>',
        transclude  :   true
    };

}).directive("campoCpf",function(){
    var escopo = {
        
    };

}).directive("nomeCompleto",function(){
    var escopo = {
        titulo      :   "@titulo",
        placeHolder :   "@placeholder",
        ajuda       :   "@ajuda"
    };
    return {
        restrict    :   "E",
        replace     :   true,
        templateUrl :   "view/ab/nome-completo.html",
        scope       :   escopo,
        controller  :   function($scope){
            
        }
    };

}).directive("celularOperadora",function(){
     var escopo = {
        operadoras  :   "=operadoras",
        DDD5Digitos :   "=ddd5"
    };
    
    return {
        restrict    :   "E",
        replace     :   true,
        templateUrl :   "view/ab/celular-operadora.html",
        scope       :   escopo,
        controller  :   function($scope){
            $scope.DDD5Digitos = $scope.DDD5Digitos.join("_");
            
        }
    };
}).directive("modal",function(){
     var escopo = {
        visivel     :   "=visivel",
        titulo      :   "@titulo",
        rodape      :   "@rodape",
    };
    
    return {
        restrict    :   "E",
        transclude  :   true,
        replace     :   false,
        templateUrl :   "view/ab/modal.html",
        scope       :   escopo,
        controller  :   function($scope,$timeout){
          //  $scope.visivel = true;
          //  $timeout(function(){$scope.visivel = false;},3000);
            $scope.abrir = function(){
                $scope.visivel = !$scope.visivel;
                console.log($scope.visivel);
            };
        },
        link        :   function(scope,elemento,atribs){
          //  elemento.append("<select><option>fdfdfdf</option></select>");
           // elemento.fadeOut(3000);
        }//
    };
}).directive("contatos",function(){
    var escopo = {
        valores     :   "=valores"
    };
   
    return {
        restrict        :   "E",
        templateUrl     :   "view/ab/contatos.html",
        scope           :   escopo,
        controller      :   function($scope){
            $scope.mostraAdicaoDeContato = false;
            $scope.contatoAGravar = {};
            $scope.editavel = false;
            var c1 = $scope.valores.contatos.length;
            if(c1 !== undefined && c1 > 0){
                $scope.numeroDeContatos = c1 + " contato" + (c1 > 1 ? "s":"") + " cadastrado" + (c1 > 1 ? "s":"");
            }
            else{$scope.numeroDeContatos ="Nenhum contato cadastrado";}
            
            $scope.adicionar = function(){
                $scope.mostraAdicaoDeContato = !$scope.mostraAdicaoDeContato;
            };
            $scope.gravarContato = function(contato){
                $scope.valores.contatos.push({tipo : contato.tipo, valor : contato.valor});
                var c = $scope.valores.contatos.length;
                if(c !== undefined && c > 0){
                    $scope.numeroDeContatos = c + " contato" + (c > 1 ? "s":"") + " cadastrado" + (c > 1 ? "s":"");
                }
            };
            $scope.editar = function(indice){
                $scope.editavel = true;
            };
            $scope.cancelaGravacao = function(){$scope.mostraAdicaoDeContato = false;};
            $scope.excluirContato = function(index){
                $scope.valores.contatos.splice(index,1);
                var c = $scope.valores.contatos.length;
                if(c !== undefined && c > 0){
                    $scope.numeroDeContatos = c + " contato" + (c > 1 ? "s":"") + " cadastrado" + (c > 1 ? "s":"");
                }
                else{$scope.numeroDeContatos ="Nenhum contato cadastrado";}
            };
        }
    };

}).directive("painelListaLocais",function(){
    var escopo = {
        dados     :   "=dados",
        aoClicarNoLocal : "=funcaoDeClique"
    };
    
    return {
        restrict    :   "E",
        transclude  :   true,
        replace     :   false,
        templateUrl :   "view/ab/painel-lista-locais.html",
        scope       :   escopo,
        controller  :   function($scope){
           
        }
    };

}).directive("localizacao",function(){
     var escopo = {
        dados     :   "=dados",
        aoClicarNoLocal : "=funcaoDeClique"
    };
    return {
        restrict    :   "E",
        transclude  :   true,
        replace     :   false,
        templateUrl :   "view/ab/localizacao.html",
        scope       :   escopo,
        controller  :   function($scope){
           
        }
    };

});