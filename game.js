function setup(){
	z = -200;
	z2 = -1000;
	z3 = -1800;
	x = 0;
	y = 200;
	t = 0;
	score = 0;
	
	bg = createCanvas(windowWidth, windowHeight, WEBGL);
	bg.position(0,0);
	
	left = createButton()
	left.position(0, 0);
	left.size(250, windowHeight);
	left.style('opacity: 0;');
	left.mouseClicked(moveleft);
	
	right = createButton()
	right.position(windowWidth-250, 0);
	right.size(250, windowHeight);
	right.style('opacity: 0;');
	right.mouseClicked(moveright);
	
	jump = createButton()
	jump.position(250, windowHeight-200);
	jump.size(windowWidth-500, 200);
	jump.style('opacity: 0;');
	jump.mouseClicked(moveup);
	
	sb = createDiv(score)
	sb.position(windowWidth/2, 0);
}

function draw() {
	t = t-1;
	angleMode(RADIANS);
	
	if(z >= 480 && y > 250){
		score = score + 1;
	} else if(z >= 480 && y < 250){
		score = 0;
	}
	
	if(z2 >= 480 && y > 250){
		score = score + 1;
	} else if(z2 >= 480 && y < 250){
		score = 0;
	}
	
	if(z3 >= 480 && y > 250){
		score = score + 1;
	} else if(z3 >= 480 && y < 250){
		score = 0;
	}
	
	if(t < 0){
	if(y > 200){
		y = y-5
	}
	} else if(y < 300){
		y = y+5
	}
	
	if(z >= 500){
		z = -1800;
	}
	
	if(z2 >= 500){
		z2 = -1800;
	}
	
	if(z3 >= 500){
		z3 = -1800;
	}
	z = z + 7
	z2 = z2 + 7
	z3 = z3 + 7
	background(0, 120, 150);
	
	sb.remove();
	sb = createDiv(score)
	sb.position(windowWidth/2, 0);
	
	noStroke();
	push();
	translate(x, y, -850);
	box(750, 50, 4500);
	fill(200);
	pop();
	
	push();
	translate(x, y, -850);
	box(50, 50, 4500);
	fill(119,49,9);
	pop();
	
	push();
	translate(x, y-70, z);
	rotateZ(1.57);
	cylinder(30, 750);
	fill(119,49,9);
	pop();
	
	push();
	translate(x, y-70, z2);
	rotateZ(1.57);
	cylinder(30, 750);
	fill(119,49,9);
	pop();
	
	push();
	translate(x, y-70, z3);
	rotateZ(1.57);
	cylinder(30, 750);
	fill(75);
	pop();
}

function moveright(){
	if(x == 200){
	x = 0;
	}else if(x == 0){
	x = -200;
	}
}

function moveleft(){
	if(x == 0){
	x = 200;
	}
	if(x == -200){
	x = 0;
	}
}

function moveup(){
	t = 20;
}