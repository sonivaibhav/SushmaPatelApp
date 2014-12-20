'use strict';


  var SPatelAppApp = angular.module('SPatelAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    /*'ngAnimate',
    'ui.bootstrap',*/
    'ui.router'
]);
SPatelAppApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller:'MainCtrl'
        }).state('about-us', {
            url: '/about-us',
            templateUrl: 'views/about-us.html',
            controller:'AboutCtrl'
        }).state('services', {
            url: '/services',
            templateUrl: 'views/services.html',
            controller:'AboutCtrl'
        }).state('portfolio', {
            url: '/portfolio',
            templateUrl: 'views/portfolio.html',
            controller:'PortfolioCtrl'
        }).state('blog', {
            url: '/blog',
            templateUrl: 'views/blog.html'
        }).state('fashion-design', {
            url: '/fashion-design',
            templateUrl: 'views/fashion-design.html'
        }).state('testimonial', {
            url: '/testimonial',
            templateUrl: 'views/testimonial.html'
        }).state('web-store', {
            url: '/web-store',
            templateUrl: 'views/web-store.html'
        }).state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html'
        });
  }]);




