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



/* temporary place for data */

var jams = [];
jams.push({
	name: "#6HourGameJam 0",
	date: "10-01-14",
	theme: "Alchemy",
	jamId: 0
});

var games = [];
games.push({
	name: "untitled",
	image1: "http://placehold.it/640x480",
	image2: "",
	image3: "",
	image4: "",
	image5: "",
	creator: "Alex Bezuska",
	studio: "TwoScoopGames",
	website: "http://twoscoopgames.com",
	twitter: "alexbezuska",
	jamId: 0,
	gameId: 0,
	gameLink: "https://rawgit.com/AlexBezuska/6HourGameJam---Alchemy/master/index.html",
	web: true,
	mac: false,
	linux: false,
	win: false,
	iOS: false,
	android: false,
	tabletop: false,
	other: false,
	otherName: "",
	active: true
});
games.push({
	name: "Alchemy Shooter",
	image1: "http://placehold.it/640x480",
	image2: "",
	image3: "",
	image4: "",
	image5: "",
	creator: "Rex Soriano",
	studio: "",
	website: "http://awesomerex.com",
	twitter: "LoLo_R",
	jamId: 0,
	gameId: 1,
	gameLink: "https://rawgit.com/awesomerex/alchemy-shooter/master/index.html",
	web: true,
	mac: false,
	linux: false,
	win: false,
	iOS: false,
	android: false,
	tabletop: false,
	other: false,
	otherName: "",
	active: true
});



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
app.get("/past", function(req, res) {
	res.render("past", {
		layout: "main",
		title: "Past Jams",
		slogan: "View all of the games from past #6HourGameJams",
		jams: jams,
		games: games
	});
});



app.listen(3001);
console.log("Express server listening on port 3001");