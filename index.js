
const express = require('express');
const app = express();
const port = 8080
var basicAuth = require('express-basic-auth');

const songs = [
  "New York, New York",
  "My Way",
  "Fly Me to the Moon",
  "Strangers in the Night",
  "I've Got You Under My Skin",
  "Come Fly with Me",
  "The Way You Look Tonight",
  "Summer Wind",
  "That's Life",
  "Chicago",
  "Moon River",
 
];


app.get('/', (req, res) => {
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  res.send(randomSong);
});


app.get('/birth_date', (req, res) => {
  res.send('December 12, 1915');
});


app.get('/birth_city', (req, res) => {
  res.send('Hoboken, New Jersey');
});


app.get('/wives', (req, res) => {
  const wives = '<h1>Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx</h1>';
  res.send(wives);
});


app.get('/picture', (req, res) => {
  res.redirect('https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg');
});


app.get('/public', (req, res) => {
  res.send('Everybody can see this page');
});
app.get('/protected', basicAuth({
  users: { 'admin': 'admin' },
  challenge: true,
  unauthorizedResponse: "401 Not authorized"
}),(req, res) => {
  res.send("<h1>Hush ko'rdik</h1>")
});
app.listen(port,() => {
  console.log('Server listening on port');
});