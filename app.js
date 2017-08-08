// var count=0;
// var t=setInterval(function(){
// 	count++;
// 	console.log("interval after",count)
// 	if(count === 10){
// 		clearInterval(t);
// 	}

// },10);

// setTimeout(function(){
// 	console.log("executed after 200ms");
// },200)

// console.log("running...........");

var modOne= require("./module1");
var msg=modOne.doSomethingFunc();
console.log(msg);
console.log(modOne.propertyOnFly);
console.log(modOne.count);