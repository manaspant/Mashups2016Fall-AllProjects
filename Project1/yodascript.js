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


    
