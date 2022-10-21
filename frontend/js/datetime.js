var mindate = new Date();
var maxdate = new Date();
maxdate.setDate(mindate.getDate() + 14);
var currentDate = mindate.toISOString().slice(0,10);
var futureDate = maxdate.toISOString().slice(0,10);
document.getElementById('currentDate').value = currentDate;
document.getElementById('currentDate').min = currentDate;
document.getElementById('currentDate').max = futureDate;
