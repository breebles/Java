
//simple background for setup
function setup() {
createCanvas (1200,950);
background (207,238,255);

}


function draw() {

//leaves
fill(24,102,20);
    ellipse (mouseX,mouseY,50,50);
    stroke(77,117,69);
    strokeWeight(8);

//trunk (first shape) and limbs
    fill (153,128,99);
    rect(600,500,70,300);
    stroke(66,55,19);
    strokeWeight(8);

    fill (153,128,99);
    rect(400,500,200,20);
    stroke(66,55,19);
    strokeWeight(8);

    fill (153,128,99);
    rect(670,600,100,20);
    stroke(66,55,19);
    strokeWeight(8);


//instructions
fill(255,255,255);
textSize(25);
textFont("Georgia");
textAlign(CENTER);
stroke(0,0,0);
strokeWeight(4);
text("Give this tree some new leaves!",350,90);

fill(255,255,255);
textSize(25);
textFont("Georgia");
textAlign(CENTER);
stroke(0,0,0);
strokeWeight(4);
text("Click anywhere on the screen to restart.",350,150);

}



function mousePressed(){
  background (207,238,255);
}
