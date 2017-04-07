function Schedule (days, hours) {
	this.days = days;
	this.hours = hours;
	this.schedule = {};
	for (var i=0; i < days.length; i++){
		this.schedule[days[i]] = {};
	}
}

Schedule.prototype.setItem = function (item) {
	this.schedule[item.day][item.hour] = item;
}

Schedule.prototype.removeItem = function (item) {
	delete (this.schedule[item.day][item.hour]);
}

Schedule.prototype.remove = function (day,hour) {
	this.schedule[day][hour] = null;
}

Schedule.prototype.getItem = function (day, hour) {
	return this.schedule[day][hour];
}

exports = module.exports = Schedule;