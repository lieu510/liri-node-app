var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

var command = process.argv[2];
var input = process.argv[3];
var input1 = process.argv;
// var input2 = process.argv[4];
// var input3 = process.argv[5];
// var input4 = process.argv[6];
liri(command, input1);

function liri(command, input1) {
    if (command === "my-tweets") {
        var client = new Twitter(keys);
        var params = { count: 20 };
        client.get("statuses/user_timeline", params, function(error, tweets, response) {
            if(error) {
                console.log(error);
            }
            for (var key in tweets) {
                console.log(tweets[key].text + " " + tweets[key].created_at);
            }
        });
    } else if (command === "spotify-this-song") {
        var spotify = new Spotify({
            id: 'd8aa38ef8bff47c48991dfe68124f58e',
            secret: '8f7f224d778a4fd5bcdd2ae52f53597b'
        });
        var theInput = "";
        if (input1 === process.argv) {
            if (!input) {
                theInput = "The Sign Ace of Base";
            } else {
                for (var i = 3; i < input1.length; i++) {
                    theInput += input1[i] + " ";
                }
            }
        } else {
            theInput = input1;
        }
        spotify.search({ type: 'track', query: theInput, limit: 1 })
        .then(function(response) {
            console.log(response.tracks.items[0].artists[0].name);
            console.log(response.tracks.items[0].name);
            console.log(response.tracks.items[0].preview_url);
            console.log(response.tracks.items[0].album.name);
        })
        .catch(function(err) {
            console.log(err);
        });
    } else if (command === "movie-this") {
        var theInput;
        if (input1 === process.argv) {
            if (!input) {
                theInput = "Mr. Nobody";
            } else {
                for (var i = 3; i < input1.length; i++) {
                    theInput += input1[i] + " ";
                }
            }
        } else {
            theInput = input1;
        }
        request('http://www.omdbapi.com/?apikey=40e9cece&t=' + theInput, function(error, response, body) {
            var info = JSON.parse(body);
            console.log(info.Title);
            console.log(info.Year);
            console.log(info.Ratings[0].Value);
            console.log(info.Ratings[1].Value);
            console.log(info.Country);
            console.log(info.Language);
            console.log(info.Plot);
            console.log(info.Actors);
        });
    } else if (command === "do-what-it-says") {
        fs.readFile("random.txt", "utf8", function(error, data) {
            
            if (error) {
                return console.log(error);
            }
        
            var dataArr = data.split(",");
        
            console.log(dataArr);
            liri(dataArr[0], dataArr[1]);
        });
    }
}