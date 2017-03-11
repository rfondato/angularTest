angular
.module("scheduler")
.component("scheduler", {
	templateUrl: "scheduler/scheduler.template.html",
	controller: function () {
		this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
		this.hours = ["8", "9", "10", "11"];
		this.currentItem = new ScheduleItem(this.days[0], this.hours[0], "","");
		
		this.schedule = new Schedule(this.days, this.hours);
		
		this.saveItem = function (item) {
			this.schedule.setItem(item);
		}
		
		this.removeItem = function (item) {
			this.schedule.removeItem (item);
		}
		
		this.selectItem = function (item) {
			this.currentItem = item;
		}
		
		this.schedule.setItem(new ScheduleItem("Tuesday", "9", "Test", "Test Desc"));
		this.schedule.setItem(new ScheduleItem("Thursday", "11", "Test 2", "Test Desc 2"));
	}
});