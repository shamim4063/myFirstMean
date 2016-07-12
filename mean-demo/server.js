var express 			= require('express'),
	app					= express(),
	mongoose			=require('mongoose'),
	bodyParser			=require('body-parser'),
	meetupsController	=require('./server/controllers/meetup-controller');
mongoose.connect('mongodb://shamim:123@ds011745.mlab.com:11745/meen-demo');
app.use(bodyParser());
app.use('/js', express.static(__dirname+'/client/js'));
app.use('/bootstrap', express.static(__dirname+'/client/bootstrap'));

app.get('/', function(req, res){
	res.sendfile(__dirname + '/client/views/index.html');
});
app.get('/about', function(req, res){
	res.sendfile(__dirname + '/client/views');
});

app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3000, function(){
	console.log("I am listening... ");
});