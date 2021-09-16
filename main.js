canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

//initial position of the rover


function add() //adds background image for the canvas and the rover image on the canvas
{

	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() 
{
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);
console.log("my_keydown");

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

		if(keyPressed == '38')
		{
			car1_up();
			console.log("up");
		}
		
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("car2 up");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("car2 down");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("car2 left");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("car2 right");
		}
}

//car1 up
function car1_up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		 uploadBackground();
		 uploadrover();
	}
}

//car2 up
function car2_up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		 uploadBackground();
		 uploadrover();
	}
}

//car1 down
function car1_down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		 uploadrover();
	}
}

//car2 down
function car2_down()
{
	if(car2_y <=500)
	{
		car2_y =car2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadrover();
	}
}

//car1 left
function car1_left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		 uploadrover();
	}
}

//car2 left
function car2_left()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadrover();
	}
}

//car1 right
function car1_right()
{
	if(car1_x <= 700)
	{
		car1_x =car1_x + 10;
		console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadrover();
   }
}

//car2 right
function car2_right()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		uploadrover();
   }
}
	