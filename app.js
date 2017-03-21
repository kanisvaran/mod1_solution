// (function() {
//
//  'use strict'
//   angular.module("LunchCheck",[])
//   .controller("LunchCheckController",LCController);
//
//   LCController.$inject=['$scope']
//
//   function LCController($scope) {
//     $scope.lunchMenu = "";
//     $scope.validateMsg = "";
//
//     $scope.checkLunch = function () {
//
//       if($scope.lunchMenu == "")
//         $scope.validateMsg = "Please enter data first";
//       else{
//          var str =   $scope.lunchMenu.split(",");
//          console.log(str)
//          console.log(str.length)
//          if(str.length>3){
//             $scope.validateMsg = "Too much!";
//          }
//         else {
//           $scope.validateMsg = "Enjoy!";
//           }
//       }
//
//
//     }
//
//   }
//
// })();
//
//


!function(){"use strict";function e(e){e.lunchMenu="",e.validateMsg="",e.checkLunch=function(){if(""==e.lunchMenu)e.validateMsg="Please enter data first";else{var n=e.lunchMenu.split(",");console.log(n),console.log(n.length),n.length>3?e.validateMsg="Too much!":e.validateMsg="Enjoy!"}}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
