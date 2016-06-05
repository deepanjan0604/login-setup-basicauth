var app=angular.module('security', ['ngRoute'])

app.config([
            '$httpProvider',
            function($httpProvider) {
                $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            }
        ]);


app.config(['$routeProvider',function($routeProvider) {
	
    $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'navigation'
    }).otherwise('/')
}
]);




app.controller('home', function($scope,$rootScope, $http) {
       // $http.get('/homePage').success(function(data) {
            $scope.data = "Login Success";
      //  })
    })
   app.controller('navigation',
        function($rootScope, $scope, $http, $location) {
	  
            /*var authenticate = function(callback) {
                $http.get('user').success(function(data) {
                    if (data.name) {
                        $rootScope.authenticated = true;
                    } else {
                        $rootScope.authenticated = false;
                    }
                  callback && callback();
                }).error(function() {
                    $rootScope.authenticated = false;
                  callback && callback();
                });
            }
            authenticate();*/
            $scope.credentials = {};
          $scope.login = function() {
               /* $http.post('/loginPage', $.param($scope.credentials), {
                    headers: {
                        "content-type": "application/urlencoded"
                    }
                })*/
        	  debugger
           	$http({
                	method:'POST',
                	url:'/login',
                	data:$scope.credentials
                }).success(function(response) {
                   // authenticate(function() {
                      //  if ($rootScope.authenticated) {
                        	if (response) {
                            $location.path("/");
                            $scope.error = false;
                        } else {
                            $location.path("/login");
                            $scope.error = true;
                        }
                   //}
                   // });
                }).error(function(response) {
                    $location.path("/login");
                    $scope.error = true;
                    $rootScope.authenticated = false;
                })
           };


            $scope.logout = function() {
                $http.post('logout', {}).success(function() {
                    $rootScope.authenticated = false;
                    $location.path("/homePage");
                }).error(function(data) {
                    $rootScope.authenticated = false;
                });
            }
        });