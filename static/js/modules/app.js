angular.module('app', []).config(config);

config.$inject = [ '$compileProvider' ];

function config($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|javascript):/);
}

angular.bootstrap(document, ['app']);


/**
 * TODO move to component
 */
var page = document.querySelector('.page')
var toggle = document.querySelector('.page__toggle-menu');

page.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    event.stopPropagation();
    page.classList.remove('page--menu-open');
  }
});

toggle.addEventListener('click', function(event) {
  event.stopPropagation();
  page.classList.toggle('page--menu-open');
});
