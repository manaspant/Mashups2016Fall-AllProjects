//Triangle

function hashtagMtn(){
	var mth='#';
	for (var i = 0; i <= 7; i++) {
		console.log(mth);
		mth=mth+'#'	};
}

//FizzBuzz

function fizzBuzz()
{
for( i=1; i<101; i++){
	if(i%3==0 && i%5==0) {
		console.log("FizzBuzz");
	}
	else if(i%3==0){
		console.log("Fizz");
	}
	else if(i%5===0){
		console.log("Buzz");
	}
	else{
		console.log(i);
	}
}
// // }

function makeChessboard(rows, cols){

	var theWholeBoard="";

	for(i=0; i<rows; i++){

		var curRow="";
	
		if (i % 2===0) {
		
			for(var j=0; j<cols; j++){
		
				curRow+="#";
		
			}
		
		}
		
		else{
		
			for (var k=0; k<cols; k++){
		
				curRow+="#";
			}
		}

		theWholeBoard+=curRow+ "\n";

	}
		return theWholeBoard;
}



var aBoard=makeChessboard(8,5);

// var theBoardEl=document.getElementById("the-board");
// console.log(theBoardEl);
// theBoardEl.innerHTML= aBoard;

var theWikiURL= 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

function makeWikiSearch(term){
	var wikiSearchURL = theWikiURL + term;
	console.log(wikiSearchURL);

	$.ajax({
		url: wikiSearchURL,
		type: 'GET',
		dataType:'jsonp',
		error: function(err){
			console.log(err);
		},
		success: function(data){
			console.log("Wohooo");
			console.log(data);

			var theResults= datat[1];
			console.log(theResults);

			if(theResults.length===0){
				alert("Please try again");
			}


			var htmlString= "<ol>";
			for(var i=0; i<theResults[i]; i++);


			$('#the-board').prepend("<ol>");
			$('the-board').prepend(theResults);



		}
	});
}
d

$('#the-board').html('Hello');

function doSomething(){
	console.log("You pressed me???");
}

$('the-button').click(function)
theButton = document.getElementById('the-button');

 theinputvalue= $('the-input').val();
console.log(theinputvalue);


makeWikiSearch(theinputvalue)

function doSomething
theButton.addEventListener('click', doSomething, false);


