//Set up requirements
var http = require("http");

// Build the server
var app = http.createServer(function(request, response) {

	console.log(request.url);

	if (request.url){
		response.writeHead(200,{
			"Content-Type": "text/plain"
		});
		response.end("The about page");
	}

	else{
		response.writeHead(200,{
			"Content-Type": "text/plain"
		});
		response.end("Everything else");
	}

	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.end("Manas!!!!");
});

// Start the server
app.listen(3000, "localhost");
//Write a message to the TERMINAL CONSOLE
console.log("Server running at http://localhost:3000/");