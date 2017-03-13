angular.module('scheduler').component('scheduleFormModal', {
	  templateUrl: 'scheduler/scheduleFormModal/schedulerFormModal.template.html',
	  bindings: {
		days:'<',
		hours:'<',
	    currentItem: '<',
	    close: '&',
	    dismiss: '&'
	  },
	  controller: function () {
	    var $ctrl = this;
	    
	    $ctrl.ok = function () {
	      $ctrl.close({$value: $ctrl.currentItem});
	    };
	
	    $ctrl.cancel = function () {
	      $ctrl.dismiss();
	    };
	  }
});