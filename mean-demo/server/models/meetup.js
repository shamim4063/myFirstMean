var mongoose=require('mongoose');

module.exports= mongoose.model('Meetup', {
	username: String, mail: String, pass: String
});