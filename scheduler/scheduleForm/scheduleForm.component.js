function ScheduleFormController() {
	//this.selectedDay = this.days[0];
	//this.selectedHour = this.hours[0];
	//this.currentItem = new ScheduleItem ("","");
	
	this.saveItem = function () {
		this.onSave({item: this.currentItem});
		this.clearItem();
	}
	
	this.removeItem = function () {
		this.onRemove({item: this.currentItem});
		this.clearItem();
	}
	
	this.clearItem = function () {
		this.currentItem = new ScheduleItem (this.days[0],this.hours[0],"","");
	}
	
	this.onDrop = function ($data) {
		this.currentItem = $data;
	}
}

angular
.module("scheduler")
.component("scheduleForm", {
	templateUrl: "scheduler/scheduleForm/scheduleForm.template.html",
	controller: ScheduleFormController,
	bindings: {
		days:'<',
		hours:'<',
		currentItem:'<',
		onSave:'&',
		onRemove: '&'
	}
});