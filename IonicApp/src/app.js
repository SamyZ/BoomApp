angular.module('sportChallenge', ['ionic', 'firebase', 'templates'])

.run(['$ionicPlatform', function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

      .state('home', {
        url: "/home",
        templateUrl: "tpls/home.tpl.html"
      })

      .state('challenges', {
        abstract: true,
        url: "/challenges",
        template: '<ion-nav-view name="content"></ion-nav-view>'
      })

      .state('challenges.new', {
        url: "/new",
        views: {
          'content' :{
            templateUrl: "tpls/challenges/new/main.tpl.html"
          }
        }
      })
      .state('challenges.new.friends', {
        url: "/friends",
        views: {
          'content@challenges' :{
            templateUrl: "tpls/challenges/new/friends.tpl.html"
          }
        }
      })

      .state('challenges.active', {
        url: "/active",
        views: {
          'content' :{
            templateUrl: "tpls/challenges/active/main.tpl.html"
          }
        }
      })

      .state('challenges.finished', {
        url: "/finished",
        views: {
          'content' :{
            templateUrl: "tpls/challenges/finished/main.tpl.html"
          }
        }
      });

    $urlRouterProvider.otherwise("/home");

  }])

  .controller('HomeTabCtrl', ['$scope', function($scope) {
    console.log('HomeTabCtrl');
  }]);




/*
.factory("Items", ['$firebaseArray', function($firebaseArray) {
  var itemsRef = new Firebase("https://sportchallenge.firebaseio.com/items");
  return $firebaseArray(itemsRef);
}])

.controller("ListCtrl", ['$scope', 'Items', function($scope, Items) {
  $scope.items = Items;
  $scope.addItem = function() {
    var name = prompt("What do you need to buy dude?");
    if (name) {
      $scope.items.$add({
        "name": name
      });
    }
  };
}]);
*/
