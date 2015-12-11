angular.module("cmsEntaoToma").run(function($location,$rootScope){
    
   $rootScope.$on("$routeChangeStart",function(evento, proxima, atual){
    //   console.log(angular.toJson(proxima));
   
   });
    
     $rootScope.$on("$routeChangeSuccess",function(evento,atual,anterior){
        if( $location.path() === "/trabalhos"){
            
        }
         
   
   });
    
    $rootScope.$on("$viewContentLoaded",function(evento){
    //   console.log(angular.toJson(evento));
   
   });
    
    $rootScope.$on('$locationChangeStart', function(event, next, current){            
        // Here you can take the control and call your own functions:
       // console.log(event.targetScope.$root);
        // Prevent the browser default action (Going back):
        //event.preventDefault();            
    });
});