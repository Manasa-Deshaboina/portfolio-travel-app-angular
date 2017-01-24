'use strict';

angular.module('travelApp.home2', ['travelApp.factory'] )
.service('homeService', ['homeFactory',
    function (homeFactory) {
        var url = "/app/home/restaurants.json";

        this.getRestaurants = function() {
          
            return homeFactory.getRestaurants();
        }

    }
]);