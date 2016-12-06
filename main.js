const angular = require("angular");

const AppModule = angular.module("App", []);

/*
E <block>
A <div block></div>
C <div>block</div>
M <div><!-- block --></div>
*/

class BlockContext {
    constructor(element, bgColor) {
      this.canvas = element.find("canvas")[0];
      this.context = this.canvas.getContext("2d");
      this.bgColor = bgColor;
    }

    drawSquare() {
      const width = this.canvas.width;
      const height = this.canvas.height;
      this.context.fillStyle = this.bgColor;
      this.context.fillRect(0, 0, width, height);
    }
}

AppModule.directive("block", function(){

    return {
        restrict: "E",
        templateUrl: "views/block.html",
        scope: {
          hex: "&",
          background: "&"
        },
        link: function($scope, element, attributes) {
            const block = new BlockContext(element, $scope.background());
            block.drawSquare();
        }
    };
})

AppModule.controller("MainController", ["$scope", function($scope) {
}]);
