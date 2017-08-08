var eventEmitter= require('events').EventEmitter;
var getResource =function(c){
	var e= new eventEmitter();
	process.nextTick(function(){
		var cnt=0;
		e.emit('start');
		var t=setInterval(function(){
			e.emit('data',++cnt);
			if(cnt === c){
				e.emit("end",cnt);
				clearInterval(t);
			}
		},10);
	});
	return (e); // so that we can listen to e
}

var r=getResource(5);
r.on('start',function(){
	console.log("started");
});

r.on('data',function(d){
	console.log("I received",d)
});

r.on('end',function(d){
	console.log("I ended with cnt:",d)
});