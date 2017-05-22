'use strict';
var app = app || {};

(function(module) {
  const adminController = {};
  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  adminController.handleAdminNav = function() {
    // app.Article.fetchAll(app.adminView.initAdminPage);
    $('.tab-content').hide();
    console.log('adminController');
    $(`#admin #about`).fadeIn();
  };

  module.adminController = adminController;
})(app);
