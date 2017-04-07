angular
.module("scheduler")
.component("scheduler", {
	templateUrl: "scheduler/scheduler.template.html",
	controller: function ($http) {
		
		var $ctrl = this;
		
		this.$onInit = function () {
			$http({
				  method: 'GET',
				  url: 'http://127.0.0.1:8000/schedule/'
				}).then(function successCallback(response) {
					$ctrl.schedule = new Schedule (response.data.days, response.data.hours);
					$ctrl.schedule.schedule = response.data.schedule;
				  }, function errorCallback(response) {
					  alert(response.data)
			});
		}
		
		this.saveItem = function (item) {
			this.schedule.setItem(item);
		}
		
		this.removeItem = function (item) {
			this.schedule.removeItem (item);
		}
		
		this.selectItem = function (item) {
			this.currentItem = item;
		}
	}
});