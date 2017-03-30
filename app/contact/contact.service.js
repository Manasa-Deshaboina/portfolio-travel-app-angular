'use strict';

angular.module('travelApp.contact', [] )
.factory('contactService', ['$http', '$q',
    function ($http, $q) {
        var url = "/app/contact/restaurants.json";

        function getRestaurants(userSearch) {
            var deferred = $q.defer();
 
            $http.get(url)
            .then(function(response) {

                deferred.resolve(response);
            });

            return deferred.promise;
        }

        return {
            getRestaurants: getRestaurants
        };
    }
]);