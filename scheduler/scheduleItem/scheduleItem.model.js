function ScheduleItem (day, hour, title, description) {
	this.day = day;
	this.hour = hour;
	this.title = title;
	this.description = description;
}

ScheduleItem.prototype.setDay = function (day) {
	this.day = day;
}

ScheduleItem.prototype.setHour = function (hour) {
	this.hour = hour;
}