var maxTime = 1000;
var eventDoubler=function(n,callback){
	var waitTime=Math.floor(Math.random() * maxTime);
	if(n%2){
		setTimeout(function(){
			callback(new Error("Odd Input!"));
		},waitTime);
	}else{
		setTimeout(function(){
			callback(null,n*2,waitTime);
		},waitTime);
	}
}

var processResult = function(err,results,time){
	if(err){
		console.log("Error : "+err.message);
	}else{
		console.log("The results are:"+results+"("+time+")");
	}
}

eventDoubler(1,processResult)
eventDoubler(2,processResult)
eventDoubler(4,processResult)