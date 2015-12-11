angular.module("cmsEntaoToma").factory("geradorSerial",function(){
return {
    gerarSerial : function(quantidade){
        var retorno = "";
        for(var c = 0; c < quantidade; c++){
            retorno += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }
        return retorno;
    },
    nomeDePasta : function(quantidade){
        var retorno = "";
        for(var c = 0; c < quantidade; c++){
            retorno += String.fromCharCode(Math.floor(Math.random() * 26) + 64);
        }
        return retorno;
    }
};

});