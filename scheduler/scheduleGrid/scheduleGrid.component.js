function ScheduleGridController() {
	this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	this.hours = ["8", "9", "10", "11"];
	this.headers = ["Hours"].concat(this.days);
	
	this.onDrop = function ($data, day, hour) {
		this.schedule.remove($data.day, $data.hour)
		$data.day = day;
		$data.hour = hour;
		$data.removeFromSource = true;
		this.schedule.setItem($data);
	}
	
	this.onSelectItem = function (day, hour) {
		this.itemSelected({item : this.schedule.getItem(day, hour)});
	}
}

angular
.module("scheduler")
.component("scheduleGrid", {
	templateUrl: "scheduler/scheduleGrid/scheduleGrid.template.html",
	controller: ScheduleGridController,
	bindings: {
		schedule: '<',
		itemSelected: '&'
	}
});