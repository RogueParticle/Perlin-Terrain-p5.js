var cols, rows;
var scl = 20;
var w = 600;
var h = 600;
var bgc = 100;
x = 0;
y = 0;
var terrain = [];
var yoff = 0;
var xoff = 0;

function setup() {
	createCanvas( w, h, WEBGL );
	cols = w / scl;
	rows = h / scl;
	  for (var y = 0; y < cols; y++) {
		terrain[y] = [];
		for (var x = 0; x < rows; x++) {
		  terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
		  xoff += 0.1;
		}
		yoff += 0.1;
	  }	
}

function draw() {
	background(bgc);
	stroke( 255 );
	noFill();
	translate(-w/2, -100);
	rotateX(PI/3);
	
	for ( y = 0; y < rows-1; y++ ) {
		beginShape( TRIANGLE_STRIP );
		for( x = 0; x < cols; x++) {
			vertex( x * scl, y * scl, terrain[x][y]);
			vertex( x * scl, (y + 1) * scl, terrain[x][y+1]);
		}
		endShape();
	}
	setTimeout(function() {
		// do your thing!
	}, 2000);

	
}