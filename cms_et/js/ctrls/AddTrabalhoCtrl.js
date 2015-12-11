angular.module("cmsEntaoToma").controller("AddTrabalhoCtrl",function($scope,geradorSerial,$upload,$http){
    $scope.fotosDaGaleria = [
    
    ];
    $scope.nomePastaTemporaria = geradorSerial.nomeDePasta(30);
    $scope.selecionaImagem = function(indice){
        $scope.imagemNaModal = $scope.fotosDaGaleria[indice].url;
        console.log($scope.fotosDaGaleria[indice].url);
    };
    $scope.destacar = function(indice){
    
    };
     $scope.excluir = function(indice){
        var _url = $scope.fotosDaGaleria[indice];
         var arq = $scope.nomePastaTemporaria;
         var pos = {
                url : _url.url,
                pasta : arq
        };
        // console.log(pos);
        $http.post("php/apagar-foto.php", pos).success(function(dados){
            if(dados.status === true){
                $scope.fotosDaGaleria.splice(indice,1);
            }
            else{
                console.log(dados.info);
            }
        });
        
    };
    $scope.salvarTrabalho = function(){
     
         
    };
    $scope.escolheuArquivo = function($files){
        $upload.upload({
            url: 'php/upload.php',
            data:{
                id: $scope.nomePastaTemporaria 
            },
            file: $files[0],

            progress: function(e){
                console.log(e);
            }
        }).then(function(response) {
            if(response.data.status){
                $scope.fotosDaGaleria.push({url:response.data.url});
            }
            console.log(response.data.url);
		   
           
           
        }); 
    };
});