var fs = require('fs');

if(fs.existsSync('temp')){
	console.log('directory exists ... Removing....');
	if(fs.existsSync('temp/newtest.txt')){
		fs.unlinkSync('temp/newtest.txt');
	}
	fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if(fs.existsSync('temp')){
	process.chdir('temp');
	fs.writeFileSync('test.txt',"This is some data");
	fs.renameSync('test.txt',"newtest.txt");
	console.log('file has a size of:'+fs.statSync('newtest.txt').size+"bytes");
	console.log('file contents:'+fs.readFileSync('newtest.txt').toString());
}
