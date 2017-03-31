angular.module('scheduler').directive('focusWhen', function() {
  return {
    scope: {
      focusWhen: '='
    },
    link: function($scope, $element) {

      $scope.$watch('focusWhen', function(shouldFocus) {
        if (shouldFocus) {
          $element[0].focus();
        }
      });

    }
  };
})

angular.module('scheduler').component('editableLabel', {
	  templateUrl: 'scheduler/editableLabel/editableLabel.template.html',
	  bindings: {
		text: '=',
	  },
	  controller: function () {
		  this.$onInit = function() {
			  this.editing = false;
		  }
	  }
});