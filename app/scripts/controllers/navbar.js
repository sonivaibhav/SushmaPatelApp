'use strict';

SPatelAppApp
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [
            {'title': 'Home','link': '/'},
            {'title': 'About-us','link': '/about-us'},
            {'title': 'Services','link': '/Services'},
            {'title': 'Portfolio','link': '/portfolio'},
            {'title': 'Blog','link': '/blog'},
            {'title': 'Fashion-Design','link': '/fashion-design'},
            {'title': 'Testimonials','link': '/testimonials'},
            {'title': 'Contact','link': '/contact'}
        ];

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });