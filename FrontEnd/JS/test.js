
  var app = angular.module('bookStoreApp', []);

  app.controller('BookController', function($scope) {
    // Sample products (you can replace this with dynamic data from an API or backend)
    $scope.books = [
      { title: 'The Haunted House', category: 'Terror', price: 10.99, imgSrc: '../IMG/Imagen1terror.jpg' },
      { title: 'Science Exploration', category: 'Ciencia', price: 15.99, imgSrc: '../IMG/imagen4ciencia.jpg' },
      { title: 'Love Story', category: 'Novela', price: 12.49, imgSrc: '../IMG/imagen4.jpg' }
    ];
    
    // Filtered books based on category
    $scope.selectedCategory = '';

    // Function to filter books by category
    $scope.filterBooks = function(book) {
      if ($scope.selectedCategory === '') return true;
      return book.category === $scope.selectedCategory;
    };
  });

