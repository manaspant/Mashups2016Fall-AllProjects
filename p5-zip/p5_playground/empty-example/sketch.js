var xPos, yPos;
var circleW = 100;

var speedX = 15; 
var speedY = 15;

var astroObj = [];

function setup() {
	createCanvas(windowWidth,windowHeight);
	noStroke();
	smooth();

	xPos = 0;
	yPos = windowHeight/2;

	for (var i = 0; i<10; i++){

		var theObj = new Astros("Mashups");

		astroObj.push(theObj);
	}
	

}

var circleW = 100;


function draw() {
	background(123,12,34);

	for (var i = 0; i<astroObj.length; i++){
		astroObj[i].drawEllipses();
		astroObj[i].updateSpeed();
		astroObj[i].checkEdges();
	}
	// drawEllipses();
	// updateSpeed();
	// checkEdges();
  	
}

function Astros(apiName){

	this.name = apiName;
	this.xPos = random(0, windowWidth);
	this.yPos = random(0, windowHeight);

	this.astroWidth = random(50,100);
	this.astroHeight = random(50,100);

	this.speedX = random(2,8);
	this.speedY = random(2,8);
}

Astros.prototype.drawEllipses = function(){

	fill(12,12,3);
	ellipse(this.xPos, this.yPos, this.circleW, this.circleW);

  	fill(100,50, 200);
  	ellipse(this.xPos, this.yPos - (this.circleW/2 + this.circleW/4), this.circleW/2, this.circleW/2);

};

function drawEllipses(){
	fill(12,12,3);
	ellipse(xPos, yPos, circleW, circleW);

  	fill(100,50, 200);
  	ellipse(xPos, yPos - (circleW/2 + circleW/4), circleW/2, circleW/2);
}

Astros.prototype.updateSpeed = function(){

  	xPos += this.speedX;
  	yPos += this.speedY;

};

Astros.prototype.checkEdges = function(){

	if (this.xPos > windowWidth || this.xPos<0){
  		this.speedX = this.speedX* -1;
  	}

  	if (this.yPos > windowHeight || this.yPos<0){
  		this.speedY = this.speedY* -1;
  	} 
};

function mousePressed(){
	console.log("Mouse was pressed!");

	var addObj = new Astros("I am new here!");
	astroObj.push(addObj);

}


function windowResized() {
	console.log("Resizing");
  resizeCanvas(windowWidth, windowHeight);
}