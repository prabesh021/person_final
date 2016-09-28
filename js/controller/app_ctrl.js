angular.module("appform").controller("app_ctrl", ["$scope", "person_serv", function($scope, person_serv){
    
    
    
    
    
    $scope.$watch(function(){
        return person_serv.personList;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, Person");
              
                console.log(newVal);
              
                console.log("OLD VAL, Person");
              
                console.log(oldVal);
              
               $scope.personList=newVal;
            }
        
        
    });
    
    
    
    
      $scope.$watch(function(){
        return person_serv.PersonListIds;
    },function(newVal, oldVal){
          if (oldVal != newVal){
                console.log("FROM WATCH LIST, Person");
              
                console.log(newVal);
                console.log("OLD VAL, Person");
                console.log(oldVal);
              
               $scope.PersonListIds=newVal;
            }
        
        
    });
     $scope.call =function(id){
         person_serv.id=id;
        console.log(id);
        person_serv.getPersonListIds();
 
    }
    
    $scope.update=function(flag){
        $scope.flag=flag;
    }
                 
                 
    
}]);