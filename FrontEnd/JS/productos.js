const app = angular.module('bookStoreApp', []);


app.controller('NavbarController', ['$scope', function ($scope) {
    $scope.selectedCategory = '';
    $scope.filterCategory = function () {
        // Category filter logic handled in the HTML
    };
}]);

er
app.controller('ProductController', ['$scope', function ($scope) {
    $scope.books = [
        { title: 'IT', author: 'Stephen King', category: 'Terror' },
        { title: 'Cosmos', author: 'Carl Sagan', category: 'Ciencia' },
        { title: 'Don Quijote', author: 'Miguel de Cervantes', category: 'Novela' },
    ];

    $scope.cart = [];

    $scope.addToCart = function (book) {
        $scope.cart.push(book);
    };
}]);