# liri-node-app

## Live Link
- https://lieu510.github.io/liri-node-app/

## Description on how to use the app
- Use on of the following commands:
    - node liri my-tweets
    - node liri spotify-this-song --song
    - node liri movie-this --movie
    - node liri do-what-it-says

## Requirements
- node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.

- node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.
You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

- node liri.js movie-this '<movie name here>'
This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

- node liri.js do-what-it-says
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.

## Technologies Used

- node.js
- Twitter API
- Spotify API
- IMDB API

## Code Explaination

