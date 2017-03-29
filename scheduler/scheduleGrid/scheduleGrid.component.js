function ScheduleGridController($uibModal) {
	
	this.$onInit = function () {
		this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		this.hours = ["8", "9", "10", "11"];
		this.headers = ["Hours"].concat(this.days);
	}
	
	this.onDrop = function ($data, day, hour) {
		this.schedule.remove($data.day, $data.hour)
		$data.day = day;
		$data.hour = hour;
		$data.removeFromSource = true;
		this.schedule.setItem($data);
	}
	
	this.onDropFailure = function (day, hour) {
		this.schedule.remove(day, hour);
	}
	
	this.onSelectItem = function (day, hour) {
		this.selectedItem = this.schedule.getItem(day, hour);
		this.itemSelected({item : this.selectedItem});
	}
	
	this.showEditModal = function (day, hour) {
		
		var $ctrl = this;
		this.selectedItem = this.schedule.getItem(day, hour);
		var createItem = !(this.selectedItem);
		
		var modalInstance = $uibModal.open({
		      animation: true,
		      component: 'scheduleFormModal',
		      resolve: {
		    	  items: function () {
			    	  return {
			    		  day: day,
			    		  hour: hour,
			    		  days: $ctrl.days,
			    		  hours: $ctrl.hours,
			    		  selectedItem: $ctrl.selectedItem,
			    		  createItem: createItem
			    	  };
		    	  }
		      }
		});
		
		modalInstance.result.then(function (selectedItem) {
			$ctrl.schedule.remove(day, hour);
			$ctrl.schedule.setItem(selectedItem);
		});
	}
}

angular
.module("scheduler")
.component("scheduleGrid", {
	templateUrl: "scheduler/scheduleGrid/scheduleGrid.template.html",
	controller: ['$uibModal',ScheduleGridController],
	bindings: {
		schedule: '<',
		itemSelected: '&'
	}
});