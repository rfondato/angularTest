angular
.module("scheduler")
.component("scheduler", {
	templateUrl: "scheduler/scheduler.template.html",
	controller: function () {
		this.schedule = {};
		
		var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		var hours = ["8", "9", "10", "11"];
		
		for (var i=0; i < days.length; i++){
			this.schedule[days[i]] = {};
		}
		
		this.schedule["Tuesday"]["9"] = new ScheduleItem("Test", "Test Desc");
		this.schedule["Thursday"]["11"] = new ScheduleItem("Test 2", "Test Desc 2");
	}
});