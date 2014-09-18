(function(){
  'use strict';

  var app = angular.module('readingList', []);

  app.controller('ReadingListController', function(){
    this.genres = genres;
    this.books  = books;
  })

  app.directive('bookGenres', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book_genres.html',
      replace: true
    }
  })

  app.directive('bookCover', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/book_cover.html',
      replace: true
    }
  })

  var genres = ['fiction', 'non-fiction', 'fantasy', 'scifi', 'comdey'];
  var books  = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'Sooooo gooooood.',
      rating: 4,
      genres: { fiction: true, fantasy: true }
    },
    {
      title: 'Apathy and Other Small Victories',
      author: 'Paul Neilan',
      isbn: '0312352190',
      review: 'Makes me chuckle.',
      rating: 3,
      genres: { fiction: true, comedy: true }
    }
  ];

})();
