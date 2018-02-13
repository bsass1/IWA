'use strict';

angular.module('myApp.services.BluePrints',[]).service('BluePrints',function($http, $q) {

var bpList, goalsList


function getBluePrints(){
    //returns a promise
return blueprints();
 }

 function getGoals(){
    //returns a promise
    return goals();
 }

 function goals(){
     var def = $q.defer();
     $http.get("./project/goals.json")
         .success(function(data) {
             def.resolve(data);
         })
         .error(function() {
             def.reject("Failed to get goals");
         });
     return def.promise;
 }


 function findGoal(goalsList, goals){
    var goalInfo = {};

        for(var i = 0; i < goalsList.length; i++){
            goalInfo[goalsList[i].guid] = []
            goalInfo[goalsList[i].guid].push({title:goalsList[i].title,target_value: goalsList[i].target_value})
        }

        if(goals.length > 1){
            var gs = []
            for(var j=0; j < goals.length; j++){

                gs.push({
                    title:goalInfo[goals[j].guid][0].title,
                    target_value:goalInfo[goals[j].guid][0].target_value
                })
            }
        }else{

            return goalInfo[goals[0].guid]
        }
        return gs;
 }

 function blueprints(){
     var def = $q.defer();
     $http.get("./project/program_blueprints.json")
         .success(function(data) {
             //bpList = data;
             def.resolve(data);
         })
         .error(function() {
             def.reject("Failed to get blue prints");
         });
     return def.promise;
 }

 function findBluePrint(bpList, n){

     for(var i= 0; i < bpList.length;i++){

         if(bpList[i].guid == n){
             return bpList[i]
         }
     }
 }


 function sortByOrder(items,key){
     return items.sort(function(a, b) {
         var x = a[key]; var y = b[key];
         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
     });
 }

    return {
        'getGoals':getGoals,
        'getBluePrints':getBluePrints,
        'sortByOrder':sortByOrder,
        'findGoal':findGoal,
        'findBluePrint':findBluePrint
    }

});
