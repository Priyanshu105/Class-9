var num1,num2;
var b1,b2,b3,b4;
var n1,n2;
function setup() {
  createCanvas(400, 400);
  num1 = createInput ();
  num1.position(10,65);
  
  num2 = createInput();
  num2.position(200,65);

b1 = createButton("Add");
b1.position(20,270);
b1.mousePressed(addition)

b2 = createButton("Subtract");
b2.position(80,270)
b2.mousePressed(subtraction);

b3 = createButton("multiply");
b3.position(180,270)
b3.mousePressed(multiplication);

b4 = createButton("divide");
b4.position(240,270)
b4.mousePressed(division);

}

function draw() {
  background(200,10,200)
  text("Number 1",70,50)
  text("Number 2",270,50)
  n1 = parseInt(num1.value());
 n2 = parseInt(num2.value());

}
function  addition ()
{
console.log(n1+n2);
}
function  subtraction ()
{
console.log(n1-n2);
}
function  multiplication ()
{
console.log(n1*n2);
}
function  division ()
{
console.log(n1/n2);
}




















