var asterNum = {
  ready : false,
  apiData: {}
};

//Making function for API call

function getAsterData(date1, date2){


  var url1 = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+date1+'&end_date='+date2+'&&api_key=5NBGjtu4S0PgGUEB1oUBjDbRuajymSMn89uprRH7';

  $.ajax({
      url: url1, // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',

      error: function(err) {
      	console.log("Uh oh");
      	console.log(err);
        console.log("We got problems");
        asterNum.apiData = 0;
        asterNum.ready = true;
      	},

    	success: function(data) {
    		console.log('Hooray!!!');
        var dataSpecific = data.near_earth_objects;
        console.log(dataSpecific);


        asterNum.ready = true;
        var firstDate = dataSpecific[date1];
        console.log('logging firstDate');
        console.log(firstDate);
        asterNum.apiData = firstDate.length;
        console.log(asterNum.apiData);
        return asterNum.apiData;

      }

  });
}


var img;
var circles;
var boxes;
var MARGIN = 40;

// console.log(asterNum.apiData);


function preload() {
img = loadImage("universe-backgrounds-11.jpg");
}


//Collision detection - Bouncing behavior

function setup() {

var w = window.innerWidth;
var h = window.innerHeight;


createCanvas((w),(h));
image(img, 0, 0);



}

function draw() {
image(img, 0, 0);





}




$('#calculateAster').click( function(){


      //Do this stuff when clicked


  console.log("You clicked!!!");
  var theInputValue1 = $('#aster-input1').val();


  getAsterData(theInputValue1,theInputValue1);
  console.log("logging asterNum");
  console.log(asterNum);



  circles = new Group();



for(var m=0; m<5; m++)
{
    var circle = createSprite(random(0,width),random(0,height));
    circle.addAnimation("normal", "asterisk_circle0009.png",  "asterisk_circle0009.png");

    //scale affects the size of the collider
    circle.scale = random(0.5,1);
    var curDiameter = Math.floor(80 * circle.scale);

    circle.setCollider("circle",0,0, curDiameter);
    circle.setSpeed(random(2,2), random(0, 360));
    

    //mass determines the force exchange in case of bounce
    circle.mass = circle.scale;
    //restitution is the dispersion of energy at each bounce
    //if = 1 the circles will bounce forever
    //if < 1 the circles will slow down
    //if > 1 the circles will accelerate until they glitch
    //circle.restitution = 1;
    circles.add(circle);

}

boxes = new Group();

for(var k=0; k<1; k++)
{
    var box = createSprite(650,350);
    box.addAnimation("normal", "Earth3.png",  "Earth3.png");
    //setting immovable to true makes the sprite immune to bouncing and displacements
    //as if with infinite mass
    box.immovable = true;
    
    //rotation rotates the collider too but it will always be an axis oriented
    //bounding box, that is an ortogonal rectangle
    // if(k%2===0)
    box.rotation = 0;
      
    boxes.add(box);
  }

drawSprites();


  circles.bounce(circles);

//boxes are "immovable"
circles.bounce(boxes);

//all sprites bounce at the screen edges

for(var i=0; i<allSprites.length; i++) {
var s = allSprites[i];
if(s.position.x<0) {
  s.position.x = 1;
  s.velocity.x = abs(s.velocity.x);
}

if(s.position.x>width) {
  s.position.x = width-1;
  s.velocity.x = -abs(s.velocity.x);
  }

if(s.position.y<0) {
  s.position.y = 1;
  s.velocity.y = abs(s.velocity.y);
}

if(s.position.y>height) {
  s.position.y = height-1;
  s.velocity.y = -abs(s.velocity.y);
  } 
}



  
  // console.log(asterNum.apiData.length);


  //circles bounce against each others and against boxes



});


// function draw() {


//     background(20,40,90);
//             if (asterNum){
          
//             var centerX = 90;
//             fill(255, 204, 0);
//             for (var i = 0; i < asterNum; i++){
//                 ellipse(centerX, 100, 40, 40);


//                 centerX += 50;
//                 }

//             }
//             else{
//                 console.log('no data');
//             }


//   // All drawing happens in the canvas

//     }


// //Loop through an objects properties
//             for (var num in number){
//                 console.log("in for loop");
//                 console.log(num);
//                 console.log(num.length);
//                 asterNum = num.length;
//                 console.log(number[num]);
//                 //loop through number[num][i]
//                 for (var i = 0; i < number[num].length; i++){
//                     console.log(number[num][i].name,number[num][i].absolute_magnitude_h,number[num][i].estimated_diameter.kilometers.estimated_diameter_max
// );
//                 }
//             }

// $.each(number, function(num,val){
//     console.log(num);
//     console.log(val);
//      //loop through number[num][i]
//     for (var i = 0; i < val.length; i++){
//         console.log(val[i]);
//     }
//  });


// function setup() {
//     background(100,100,200);
//     console.log("Setup");
//     createCanvas(600, 400);

//     msg = createDiv('Asteroid Data');
//     var canvas = createCanvas(windowWidth, windowHeight);
//     canvasElement = canvas.elt;
//     msg.addClass('msg');

// }






// function draw() {
//         if (asterNum){
//             var centerX = 90;
//             fill(255, 204, 0);
//             for (var i = 0; i < asterNum; i++){
//                 ellipse(centerX, 100, 40, 40);


//                 centerX += 50;
//             }

//         }
//     else{
//         console.log('no data');
//     }
      


 // background('rgba(0,255,0, 0.25)');
  //Check if there is data   
