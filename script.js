// Declare variables below this line



function setup() {
  createCanvas(600, 600);
  
}

function draw() {
	background(200);
	// Happy face code START
	push()
	translate(250,250)
	fill(244, 255, 128)
  ellipse(25, 25, 150)
	fill(255, 255, 255)
	ellipse(0, 0, 30)
	ellipse(50, 0, 30)
	fill(0,0,0)
	ellipse(0, 0, 10)
	ellipse(50, 0, 10)
	arc(25, 50, 50, 50, 0, radians(180), PIE);
	pop()
	// happy face code END
	

}



// Declare functions below this line

