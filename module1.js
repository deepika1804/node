var count=10;

var doSomething=function(){
	console.log('do Something Accessible and exported');
	return "success";
}

module.exports.doSomethingFunc=doSomething;
module.exports.propertyOnFly="Garbage Value !";