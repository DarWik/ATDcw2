var mapFun5 = function() {
for (i = 0; i < this.credit.length; i++){
emit({ currency: this.credit[i].currency, nationality: this.nationality, sex: this.sex }, parseFloat(this.credit[i].balance) );}};

var redFun5 = function(currency, values){
value = { calIlosSrod: 0, sredIloSrod: 0 };
for (i = 0; i < values.length; i++){
value.calIlosSrod += values[i];}
value.sredIloSrod = (value.calIlosSrod / values.length);
return value;};

db.people.mapReduce(
mapFun5,
redFun5,
{query: { nationality: "Poland", sex: "Female" },
out: "Wynik5"})

printjson(db.Wynik5.find().toArray())