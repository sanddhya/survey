surveyApp.controller('startSurveyController', ['$scope', 'commonService', function ($scope, commonService) {
    $scope.selectedService = commonService.selectedCategory;

    $scope.setActiveCat = function (cat) {
        $scope.selectedService = cat;
    }
}]);
