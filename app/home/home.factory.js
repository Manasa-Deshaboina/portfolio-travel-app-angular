'use strict';

angular.module('travelApp.factory', [])
    .factory('homeFactory', ['$http', '$q',
        function ($http, $q) {
            var url = "/app/home/restaurants.json";
            function getRestaurants(userSearch) {
                var deferred = $q.defer();
                $http.get(url)
                    .then(function (response) {
                        deferred.resolve(response);
                    });
                return deferred.promise;
            }
            return {
                getRestaurants: getRestaurants
            };
        }
    ]);