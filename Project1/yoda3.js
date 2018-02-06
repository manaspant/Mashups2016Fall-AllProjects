var temps;

function makeD3Chart(dataset){
	//Clear the container each time a new chart is made
	$('#container').html('');

	var w = $('#container').width();
	var h = 300;
	var barPadding = 2;


	var yScale = d3.scale.linear()
		.range([100,h - 50]);

	
	//Create SVG element
	var svg = d3.select('#container')
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	svg.selectAll("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", function(d, i) {
			return i * (w / numberChar);
		})
		.attr("y", function(d) {
			//return h - numberChar;
			return h - (yScale(numberChar));
		})
		.attr("width", w / numberChar - barPadding)
		.attr("height", function(d) {
			//return numberChar;
			return yScale(numberChar);
		})
		.attr("fill", function(d){
			var red = Math.min(Math.round(numberChar) * 2, 255);
			var color = 'rgb(' + red + ',20,80)';
			return color;
		})

				.on('click', function(d){
			console.log("The temp is " + numberChar);
			d3.select(this)
				.transition()
				.attr("y", h)
				.attr("fill", "blue")
				.duration(1000);
		});

		// .attr("class", "rects")
		// .transition()
		// .attr("y", function(d){
		// 	return h - numberChar;
		// })
		// .duration(5000);



	svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d) {
			return numberChar.toString();
		})
		.attr("text-anchor", "middle")
		.attr("x", function(d, i) {
			return i * (w / numberChar) + (w / numberChar - barPadding) / 2;
		})
		.attr("y", function(d) {
			return h - numberChar + 10;
		})
		.attr("font-family", "sans-serif")
		.attr("font-size", "20px")
		.attr("fill", "white");
}

function yoda(term){

	$.ajax( {
    	url: 'https://yoda.p.mashape.com/yoda?sentence=' + term,
    	type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    	data: {
    		//"sentence": term
    	}, // Additional parameters here
    	beforeSend: function(xhr) {
	    	xhr.setRequestHeader("X-Mashape-Authorization", "HW9WWFfdm3mshl7JvlzIA8b7ffZJp16eEBjjsnqgOjcBJy7ajb"); // Enter here your Mashape key
    	},
    	dataType: 'text',
    	error: function(err) {
    		console.log("Uh oh");
    		console.log(err);
    	},
    	success: function(data) {
    		console.log('Hooray!!!');
    		console.log(data);

    		var yodaText = data;
	   		$('#yoda-says').html(yodaText);

    		/*
    		$('#yoda-says').append('<p>' + term + '</p>');
	   		$('#yoda-says').append('<p>' + yodaText + '</p>');
			*/
		}
	});
}

//document.getElementById("yoda-button").onclick = yoda("Welcome to Yodaslate");

//yoda("Tomek is a good programmer.");

function chuck(){

	d3.selectAll("p").style("color", "white");

	console.log("Calling the chuck function...");

    $.ajax({

        url: 'https://api.chucknorris.io/jokes/random',
		type:'GET',
		dataType: 'json',
		error: function(err){
			console.log(oops);
			console.log(err);
			},
		success: function(data){
			console.log("wohooo");
			var chucktext = data.value;
			console.log(chucktext);

			var numberChar = chucktext.length;
			console.log(numberChar);
			var chucknames = [ 'chuck norris', 'Chuck Norris', 'chuck', 'norris', 'Chuck norris', 'chuck Norris' ];

			for(i = 0; i<10; i++) {
 				chucktext = chucktext.replace(chucknames[i], "Yoda");
			}
					console.log(chucktext);
			
			/*
			var newtext = chucktext.replace("Chuck Norris", "Yoda");
			var newtext = newtext.replace("chuck norris", "Yoda");
			var newtext = newtext.replace("chuck", "Yoda");
			var newtext = newtext.replace("norris", "Yoda");
			var newtext = newtext.replace("Chuck norris", "Yoda");
			console.log(newtext);
*/

			
	   		$('#joke-print').html("Did you know?  " + chucktext);
	   		makeD3Chart(numberChar);

        }

    });

}

$('#yoda-button').click( function(){
		//Do this stuff when clicked
		console.log("You clicked!!!");
		var theInputValue = $('#yoda-input').val();

		$('#chuck-joke').html('');

		yoda(theInputValue);


		$('#joke-print').html('');
		chuck();
	});


    
