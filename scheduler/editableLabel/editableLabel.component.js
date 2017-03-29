angular.module('scheduler').component('editableLabel', {
	  templateUrl: 'scheduler/editableLabel/editableLabel.template.html',
	  bindings: {
		resolve: '<',
	    close: '&',
	    dismiss: '&'
	  },
	  controller: function () {
	    var $ctrl = this;
	    
	    $ctrl.$onInit = function () {
	    	$ctrl.days = $ctrl.resolve.items.days;
	    	$ctrl.hours = $ctrl.resolve.items.hours;
	    	$ctrl.day = $ctrl.resolve.items.day;
	    	$ctrl.hour = $ctrl.resolve.items.hour;
	    	
	    	if ($ctrl.resolve.items.createItem)
	    		$ctrl.currentItem = new ScheduleItem ($ctrl.day, $ctrl.hour, "", "");
	    	else
	    		$ctrl.currentItem = $ctrl.resolve.items.selectedItem;
	    }
	    
    	this.save = function () {
	      $ctrl.close({$value: $ctrl.currentItem});
	    };
	
	    this.cancel = function () {
	      $ctrl.dismiss();
	    };
	  }
});