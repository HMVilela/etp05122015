(function(){
    var history_api = typeof history.pushState !== 'undefined';
    // history.pushState must be called out side of AngularJS Code
    if ( history_api ) history.pushState(null, '', '#login');  
})