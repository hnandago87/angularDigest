var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', '$rootScope', function($scope, $filter, $timeout, $rootScope) {
    
    $scope.handle = '';
                                    $rootScope.look = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    
    
    $scope.$watch('handle', function(newValue, oldValue) {
        $rootScope.look = newValue;
        $scope.$emit('boom', { name : newValue });
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        console.log($rootScope.look);
    });
   
    
    setTimeout(function(){
        
        $scope.$apply(function(){
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
        
        });
    }, 3000);
   
    
  
    
    /* $timeout(function() {
       
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
        
    }, 3000);*/
    
}])


myApp.controller('secondController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
       $scope.$on('boom', function(event, args) {
console.log('ARGS' + args.name);
     $scope.retrievedVal =  args.name;
    // do what you want to do
});
   
}])

