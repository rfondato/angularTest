angular
.module("scheduler")
.component("scheduler", {
	templateUrl: "scheduler/scheduler.template.html",
	controller: function () {
		this.schedule = {};
		this.schedule.Tuesday = {};
		this.schedule.Thursday = {};
		this.schedule["Tuesday"]["9"] = new ScheduleItem("Test", "Test Desc");
		this.schedule["Thursday"]["11"] = new ScheduleItem("Test 2", "Test Desc 2");
	}
});