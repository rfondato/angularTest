var express = require("express");
var ScheduleModel = require("./scheduler/scheduler.model");
var app = express();

/* load the schedule */
app.get("/schedule/", function(req, res) {
	
	console.log("a");
	
	/* a hard coded example for now */
	res.setHeader('Content-Type', 'application/json');
	
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	var hours = [];
	for (var i = 0; i < 24; i++)
		hours.push(i);
	
	var schedule = new ScheduleModel(days, hours);
	
	console.log(schedule);
	
	schedule.setItem(new ScheduleItem("Tuesday", "9", "Event 1", "Event Description 1"));
	schedule.setItem(new ScheduleItem("Thursday", "11", "Event 2", "Event Description 2"));
	
    res.send(JSON.stringify(schedule));
});

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('index.html')
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]); 
});

//Start server
var port = 8000;
app.listen(port, function() {
  console.log("Server up and listening on port:" + port);
});