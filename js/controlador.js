function PuntajeCtrl($scope) {
  $scope.puntajes = [
    {text:999},
    {text:999}];
 
  $scope.addPuntaje = function() {
    $scope.puntajes.push({text:$scope.puntajeText});
    $scope.puntajeText = '';
  };
}