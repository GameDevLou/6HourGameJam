var express = require('express'),

	http = require('http'),
	path = require('path'),
	exphbs = require('express3-handlebars'),

	app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('hbs', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.use(express.static(process.cwd() + '/public'));



app.get("/", function(req, res) {
	res.render("about", {
		layout: "main",
		title: "About the Jam",
		slogan: "At this time we only accept self-hosted games."
	});
});

app.get("/submit", function(req, res) {
	res.render("submit", {
		layout: "main",
		title: "Submit your game",
		slogan: "At this time we only accept self-hosted games."
	});
});



app.listen(3001);
console.log("Express server listening on port 3001");