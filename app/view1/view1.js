'use strict';

angular.module('myApp.view1', [])
.controller('View1Ctrl',['$scope', 'BluePrints',function($scope, BluePrints) {

    $scope.bpList =[];
    $scope.goalsList =[];

    BluePrints.getBluePrints().then(function(items){
        var key = 'display_order';
        $scope.bpList = BluePrints.sortByOrder(items.program_blueprints,key);
    });

   BluePrints.getGoals().then(function(g){
       $scope.goalsList = g.goals;
   });

}]);