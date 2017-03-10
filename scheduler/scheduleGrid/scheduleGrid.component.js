function ScheduleGridController() {
	this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	this.hours = ["8", "9", "10", "11"];
	this.headers = ["Hours"].concat(this.days);
}

angular
.module("scheduler")
.component("scheduleGrid", {
	templateUrl: "scheduler/scheduleGrid/scheduleGrid.template.html",
	controller: ScheduleGridController,
	bindings: {
		schedule: '<'
	}
});