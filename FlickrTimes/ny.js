console.log("Loading 1");

var flickrPhotos;
var nyTimesArticles;

function makeHTML(headline, picURL){
	var htmlStr="";

	//for(var i=0; i<nyTimesArticles.length; i++){

		htmlStr+="<div class='flickr-times-container'>";
		htmlStr+="<h2>"+ headline+ "</h2>";
		htmlStr+="<img src='"+ picURL+"'>";
		htmlStr+="</div>";
	//}

	$('#flickr-times').append(htmlStr);
	
}


function getFlickrData(nytObj){

	console.log("Loading");
	
	var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_o&text=";
	var currentSearchWord ="news";
	if (nytObj.keywords[0]){
		currentSearchWord=nytObj.keywords[0].value;
	} {}
	var myFlickrKey = '&api_key=' + 'e1df06879e4cf575bc412eda682fbaf3';

	var flickrReqURL = flickrURL + currentSearchWord + myFlickrKey;

	console.log(flickrReqURL);

	$.ajax({
		url:flickrReqURL,
		type:'GET',
		dataType: 'json',
		error: function(err){
			console.log(oops);
			console.log(err);
			},
		success: function(data){
			console.log("Got the flcikr data.");
			console.log(data);

			flickrPhotos= data.photos.photo[0].url_o || news.gif;
			console.log(flickrPhotos);


			var flickrURL = data.photos.photo[0].url_o || news.gif;
			var theHeadline = nytObj.headline.main;
			makeHTML(theHeadline, flickrURL);

		}
	});
}


function getNYTimesData(){
	console.log("About to load");
	var NYTimesURL="http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=0&sort=newest&api-key=";
	var myAPIKey="1416912701ae440998a593c6df93dc5f";
	var nyTimesSearchURL= NYTimesURL+myAPIKey;

	$.ajax({
		url:nyTimesSearchURL,
		type:'GET',
		dataType: 'json',
		error: function(err){
			console.log(oops);
			console.log(err);
			},
		success: function(data){
			console.log("wohooo");
			console.log(data);

			nyTimesArticles= data.response.docs;
			console.log(nyTimesArticles);
			for(var i=0; i<nyTimesArticles.length; i++){
				getFlickrData(nyTimesArticles[i]);
			}

			
		}			
	});

}


$(document).ready(function(){
	console.log("Loading 2");
	console.log("Loading 3");
	getNYTimesData();

});