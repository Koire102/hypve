function setup() {
	img = loadImage("https://png.icons8.com/small/1600/filled-circle.png");
		ip1 = createFileInput(handleFile);
		ip1.position(windowWidth/3, windowHeight/7.5);
		ip1.size(windowWidth/2, 50);
		ip1.style('font-size: 25;');
		
		btnc = createButton('Clear');
		btnc.position(windowWidth/2.4, windowHeight/6.25);
		btnc.size(windowWidth/6, 50);
		btnc.style('color: white; font-size: 30; background-color: black; border-radius: 25px; opacity: 0.9; border: 5px solid purple;');
		btnc.mouseClicked(cc);
		
		ss = createButton('Save');
		ss.position(windowWidth/5, windowHeight/1.1);
		ss.size(windowWidth/6, 50);
		ss.style('color: white; font-size: 30; background-color: black; border-radius: 25px; opacity: 0.9; border: 5px solid purple;');
		ss.mouseClicked(savepic);
		
		rSlider = createSlider(10, 500, 250);
		rSlider.position(windowWidth/2, windowHeight/1.1);
		rSlider.size(windowWidth/3, 50);
		
		parea = createCanvas(windowWidth - 10, windowHeight/2)
		parea.position(0, windowHeight/5);
		parea.style('border-radius: 25px; border: 5px solid Purple;');
		parea = background(255)
	}
	
	function handleFile(file) {
		print(file);
		if (file.type === 'image') {
			img = loadImage(file.data);
		}
	}
	
	function cc() {
		background(255);
	}
	
	function savepic() {
		saveCanvas('png', 'png');
	}
	
	function draw() {
		imgd = rSlider.value();
		if (img){
		if (mouseIsPressed == true) {
			image(img, mouseX-imgd/2, mouseY-imgd/2, imgd, imgd);
		}
		}
	}
