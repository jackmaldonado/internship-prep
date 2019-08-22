//
// // Create a function that determines whether or not a player is holding a “full house” in their hand. A hand is an array of five cards - one pair and one three of a kind. Ex) [5, 5, 5, 3, 3] would return true. [5, 5, 3, 3, 4] would return false.
//
// // create function that takes in an array
// function fullHouse(arr){
//   let count = arr[][] =
//   // loop/map thru arr to see if there is a three of a kind and a pair
//   for(let i = 0, i < arr.length, i++)
//   if(arr[i] == )
//   // return true or false
//
//
// }
var http = require("http");


http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World!\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
