var routedTabs = angular.module('routedTabs', [
  'ui.router',
  'ui.bootstrap',
  'ui.router.tabs'
]);

routedTabs.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('user', {
    url:         '',
    controller: 'ExampleCtrl',
    templateUrl: 'routedTabs/example.html'
  }).state('user.accounts', {
    url:         '/user/accounts',
    templateUrl: 
    'sites/all/modules/custom/routedTab/js/routedTabs/tpl/accounts.html'
  }).state('user.settings', {
    url:         '/user/settings',
   //controller: 'SettingsCtrl',
    templateUrl: 
    'sites/all/modules/custom/routedTab/js/routedTabs/tpl/accounts.html'
  }).state('user.settings.one', {
    url:         '/one',
    template: '<div>Settings nested route 1</div>'
  }).state('user.settings.two', {
    url:         '/two',
    template: '<div>Settings nested route 2</div>'
  });
}]);

jQuery(document).ready(function() {
  /**
   * We are initialization the angular app by hand and not with the Automatic
   * Initialization.
   * The reason for this is that we are loading multiple angular apps on one
   * page and the Automatic Initialization can only handle 1 app per page.
   *
   * @link http://docs.angularjs.org/guide/bootstrap
   */
  angular.bootstrap(document.getElementById('routedTabs-app'),['routedTabs']);
  });