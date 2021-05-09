var mapFun4 = function() {
emit(this.nationality, { height: parseFloat(this.height), weight: parseFloat(this.weight) });}

var redFun4 = function(nationality, values) {
value = { minbmi: 0, maxbmi: 0, avgbmi: 0 };
var min = (values[0].weight / Math.pow(values[0].height / 100, 2));
var max = min;
var sumbmi = 0;
for (i = 1; i < values.length; ++i){
var tempbmi = (values[i].weight / Math.pow(values[i].height / 100, 2));
sumbmi += tempbmi;
if (tempbmi < min) min = tempbmi;
if (tempbmi > max) max = tempbmi;}
value.minbmi = min;
value.maxbmi = max;
value.avgbmi = (sumbmi / values.length);
return value;}

db.people.mapReduce(
mapFun4,
redFun4,{
out: "Wynik4",})

printjson(db.Wynik4.find().toArray())