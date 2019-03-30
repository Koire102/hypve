var move1 = 6;
var move2 = 6;
var move3 = -6;
var move4 = -6;
var move5 = 6;
var move6 = 6;
var move7 = -6;
var move8 = -6;
var move9 = 6;
var move10 = 6;
function setup() {
	x1 = random(windowWidth);
	y1 = random(windowHeight);
	x2 = random(windowWidth);
	y2 = random(windowHeight);
	x3 = random(windowWidth);
	y3 = random(windowHeight);
	x4 = random(windowWidth);
	y4 = random(windowHeight);
	x5 = random(windowWidth);
	y5 = random(windowHeight);
	r = random(50, 225);
	g = random(50, 225);
	b = random(50, 225);
	s1 = random(70, 150);
	s2 = random(70, 150);
	s3 = random(70, 150);
	s4 = random(70, 150);
	s5 = random(70, 150);
	blank = createCanvas(windowWidth, windowHeight);
	blank.position(0, 0);
}

function draw() {
	background(0, 170, 225);
	//borderbounce
	if (x1 > windowWidth){
		move1 = -6;
	}
	if (x1 < 0){
		move1 = 6;
	}
	if (y1 > windowHeight){
		move2 = -6;
	}
	if (y1 < 0){
		move2 = 6;
	}
	
	if (x2 > windowWidth){
		move3 = -6;
	}
	if (x2 < 0){
		move3 = 6;
	}
	if (y2 > windowHeight){
		move4 = -6;
	}
	if (y2 < 0){
		move4 = 6;
	}
	
	if (x3 > windowWidth){
		move5 = -6;
	}
	if (x3 < 0){
		move5 = 6;
	}
	if (y3 > windowHeight){
		move6 = -6;
	}
	if (y3 < 0){
		move6 = 6;
	}
	
	if (x4 > windowWidth){
		move7 = -6;
	}
	if (x4 < 0){
		move7 = 6;
	}
	if (y4 > windowHeight){
		move8 = -6;
	}
	if (y4 < 0){
		move8 = 6;
	}
	
	if (x5 > windowWidth){
		move9 = -6;
	}
	if (x5 < 0){
		move9 = 6;
	}
	if (y5 > windowHeight){
		move10 = -6;
	}
	if (y5 < 0){
		move10 = 6;
	}
	x1 = x1 + move1;
	y1 = y1 + move2;
	x2 = x2 + move3;
	y2 = y2 + move4;
	x3 = x3 + move5;
	y3 = y3 + move6;
	x4 = x4 + move7;
	y4 = y4 + move8;
	x5 = x5 + move9;
	y5 = y5 + move10;
	cObs();
}

function cObs() {
	b1 = ellipse(x1, y1, s1);
	b2 = ellipse(x2, y2, s2);
	b3 = ellipse(x3, y3, s3);
	b4 = ellipse(x4, y4, s4);
	b5 = ellipse(x5, y5, s5);
	fill(r, g, b);
	noStroke();
}