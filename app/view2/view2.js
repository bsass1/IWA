'use strict';

angular.module('myApp.view2', [])
    .controller('View2Ctrl', ['$scope','$location','BluePrints',function($scope, $location,BluePrints) {
        $scope.program = $location.path().split(':')[1];
        $scope.guid = $location.path().split(':')[2];

        console.log($scope.guid)



        BluePrints.getBluePrints().then(function(items){
            var key = 'display_order';
            $scope.bpList = items.program_blueprints;

            $scope.blueprint = BluePrints.findBluePrint($scope.bpList , $scope.guid);

            BluePrints.getGoals().then(function(g){
                $scope.goalsList = g.goals;
                if($scope.blueprint.goals!= 0){
                 $scope.goals = BluePrints.findGoal($scope.goalsList ,$scope.blueprint.goals)
                }
            });
        });
}])
