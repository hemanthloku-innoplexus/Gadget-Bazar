// Define the `phonecatApp` module
// angular.module('phonecatApp', [
//   // ...which depends on the `phoneList` module
//   'phoneList'
// ]);

angular.module('phonecatApp', [
  'ui.router','phoneList','phoneDiscp','angular.filter'
]);
