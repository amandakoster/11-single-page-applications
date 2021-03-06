'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.handleAboutNav = function() {
    $('.tab-content').hide();
    $(`#about`).fadeIn();
  };

  module.aboutController = aboutController;
})(app);
