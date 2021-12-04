// Declare variables below this line
var face1 = {
	x: 250,
	y: 250,
	speedX: 2,
	speedY: 2
}

var face2 = {
	x: 100,
	y: 100,
	speedX: 2,
	speedY: 2
}

var face3 = {
	x: 100,
	y: 400,
	speedX: 2,
	speedY: 2
}

var positions = []
var amount = 50
function setup() {
  createCanvas(600, 600);
  drawEnemy(amount)
}

function draw() {
	background(200);
	for(var i = 0; i < amount; i++){
		textSize(32)
		text("👾", positions[i][0], positions[i][1])
	}
	arrows()
	drawFace(face1.x, face1.y)
	drawFace(face2.x, face2.y)
	drawFace(face3.x, face3.y)
	

}



// Declare functions below this line
function drawFace(x, y){
	// Happy face code START
	push()
	translate(x, y)
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

function arrows(){
	if(keyIsPressed){
		if(keyCode == 39){
			face1.x += face1.speedX
		}
		if(keyCode == 37){
			face1.x -= face1.speedX
		}
		if(keyCode == 38){
			face1.y -= face1.speedY
		}
		if(keyCode == 40){
			face1.y += face1.speedY
		}
		// Continue for other faces and keys...

	}
}

function drawEnemy(amount){
	for(var i = 0; i < amount; i++){
		var x = random(0,600)
		var y = random(0,600)
		positions.push([x, y])
	}
}
