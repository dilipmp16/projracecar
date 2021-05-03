canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_image="le cary.png";
car1_width=60;
car1_height=100;
car1_x=300;
car1_y=500;

car2_image="le le car.png";
car2_width=60;
car2_height=100;
car2_x=400;
car2_y=500;

background_image="auesome.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image    
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
  keyPressed = e.keyCode;
  console.log(keyPressed);

  //Control Car 1
  if(keyPressed == '38')
  {
    car1_up();
    console.log("up arrow key");
  }
  if(keyPressed == '40')
  {
    car1_down();
    console.log("down arrow key");
  }
  if(keyPressed == '39')
  {
    car1_left();
    console.log("left arrow key");
  }
  if(keyPressed == '39')
  {
    car1_right();
    console.log("right arrow key");
  }

  //Control Car 2
  if(keyPressed == '87')
  {
    car2_up();
    console.log("key w")
  }

  if(keyPressed == '83')
  {
    car2_down();
    console.log("key s")
  }

  if(keyPressed == '65')
  {
    car2_left();
    console.log("key a")
  }

  if(keyPressed == '68')
  {
    car2_right();
    console.log("key d")
  }
  //uploadBackground();
}

function car1_up()
{
    if(car1_y>=0)
    {
        car1_y -= 10;
        console.log("When up arrow is pressed = " + car1_x + " - " +car1_y );
        uploadBackground();
        
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y<=500)
    {
        car1_y += 10;
        console.log("When down arrow is pressed = " + car1_x + " - " +car1_y );
        uploadBackground();
      
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x>=0)
    {
        car1_x -= 10;
        console.log("When left arrow is pressed = " + car1_x + " - " +car1_y );
        uploadBackground();
  
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if(car1_x<=700)
    {
        car1_x += 10;
        console.log("When right arrow is pressed = " + car1_x + " - " +car1_y );
        uploadBackground();

        uploadcar1();
        uploadcar2();
    }
}
 
//Car 2 Control
function car2_up()
{
    if(car2_y>=0)
    {
        car2_y -= 10;
        console.log("When up arrow is pressed = " + car2_x + " - " +car2_y );
        uploadBackground();
       
        uploadcar1();
        uploadcar2();
    }
}

function car2_down()
{
    if(car2_y<=500)
    {
        car2_y += 10;
        console.log("When down arrow is pressed = " + car2_x + " - " +car2_y );
        uploadBackground();

        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if(car2_x>=0)
    {
        car2_x -= 10;
        console.log("When left arrow is pressed = " + car2_x + " - " +car2_y );
        uploadBackground();
  
        uploadcar1();
        uploadcar2();
    }
}

function car2_right()
{
    if(car2_x<=700)
    {
        car2_x += 10;
        console.log("When right arrow is pressed = " + car2_x + " - " +car2_y );
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}