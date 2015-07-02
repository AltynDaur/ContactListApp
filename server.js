var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/contactlist',function (req,res) {
	console.log('Need more data!');
	person1= {
	        name: 'Tim',
	        email: 'tim@gmail.com',
	        number:'(571) 426-1433'
	    };

	    person2 = {
	        name:'Liam',
	        email:'neason@taken2.com',
	        number: '(777) 777-7777'
	    };

	    person3={
	        name: 'Jessie',
	        email:'jessie@vma.com',
	        number: '(684) 426-1232'
	    };

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(3000);
console.log('Server running on port 3000');
