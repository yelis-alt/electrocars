var mindate = new Date();
var maxdate = new Date();
maxdate.setDate(mindate.getDate() + 14);
mindate = mindate.toLocaleDateString();
maxdate = maxdate.toLocaleDateString();
currentDate1 = mindate.slice(6,10).concat('-').concat(mindate.slice(3,5)).concat('-').concat(mindate.slice(0,2)).concat('T');
futureDate1 = maxdate.slice(6,10).concat('-').concat(maxdate.slice(3,5)).concat('-').concat(maxdate.slice(0,2)).concat('T');

var mintime = new Date();
var maxtime = new Date();
mintime = mintime.toLocaleTimeString();
maxtime.setMinutes(maxtime.getMinutes() + 60);
maxtime = maxtime.toLocaleTimeString();
currentDate = currentDate1.concat(mintime.slice(0,5));
futureDate = futureDate1.concat(mintime.slice(0,5));

document.getElementById('firstDate').value = currentDate;
document.getElementById('firstDate').min = currentDate;
document.getElementById('firstDate').max = futureDate;

forecastDate = currentDate1.concat(maxtime.slice(0,5));
document.getElementById('secondDate').value = forecastDate;
document.getElementById('secondDate').min = currentDate;
document.getElementById('secondDate').max = futureDate;