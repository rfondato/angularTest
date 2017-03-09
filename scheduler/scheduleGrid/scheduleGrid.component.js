angular
.module("scheduler")
.component("scheduleGrid", {
	templateUrl: "scheduler/scheduleGrid/scheduleGrid.template.html",
	controller: function () {
		this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		this.hours = ["8-9", "9-10", "11-12"];
	}
});