var months = new Array(
	"JAN", "FEB", "MAR", "APL",
	"MAY", "JUN", "JUL", "AUG", "SEP",
	"OCT", "NOV", "DEC");
	var currentTime = new Date();
	var month = currentTime.getMonth();
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	document.write(months[month] + " " + day + " " + year);