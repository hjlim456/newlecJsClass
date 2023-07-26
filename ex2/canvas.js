/** @type {HTMLCanvasElement} */

// var canvas = document.body.firstElementChild
var canvas = document.querySelector("#canvas")

var ctx = canvas.getContext("2d")

// ctx.fillRect(25,25,100,100)
// ctx.clearRect(45,45,60,60)
// ctx.strokeRect(50,50,50,50)

ctx.beginPath();//펜을 눌른것
ctx.moveTo(75,50)
ctx.lineTo(100,75)
ctx.lineTo(75,100)
ctx.closePath()
ctx.stroke()

//-----------------------------------------------------------------------------

// ctx.beginPath();
// ctx.arc(75,75,50,0,Math.PI*2,true)//0~360도(기본각도는 시계방향으로측정)까지 true방향으로   
//                                   //각도까지 원의 호를 그린다
// ctx.moveTo(110,75)
// ctx.arc(75,75,35,0, Math.PI,false)
// ctx.moveTo(80,75)
// ctx.arc(75,75,5,0, Math.PI*2,false)

//  ctx.stroke()
//-----------------------------------------------------------------------------


// ctx.beginPath()
// ctx.moveTo(50,50)
// // ctx.quadraticCurveTo(150,50,100,100)
// ctx.bezierCurveTo(150,50, 150,70, 100, 100)

// ctx.strokeRect(150,50,1,1)
// ctx.strokeRect(150,70,1,1)
// ctx.stroke()

//-----------------------------------------------------------------------------


//moveTo로 끊어낼필요없이 각각 그리는방법 >>Path2D
// var shape1 = new Path2D();
// shape1.rect(10, 10, 100, 100)
// ctx.stroke(shape1)

// var shape2 = new Path2D();
// shape2.arc(160,60,50,0,Math.PI*2,true)
// ctx.stroke(shape2)

// var shape3 = new Path2D("M10 10 h 110 v 100 h -100 z");
// ctx.stroke(shape3)



// {// ctx.beginPath();를 해줘야 색이 안겹친다.

// ctx.strokeStyle = "blue";
// ctx.moveTo(20, 20);
// ctx.lineTo(150, 20);
// ctx.stroke();

// ctx.beginPath()
// ctx.strokeStyle= "green"
// ctx.moveTo(20, 40);
// ctx.lineTo(150, 40);
// ctx.stroke();
// }

// ctx.strokeStyle = "red";
// ctx.arc(50,50,50,0, Math.PI*1.5);
// ctx.moveTo(50,0)
// ctx.lineTo(100,0);
// ctx.moveTo(50,0)
// ctx.lineTo(100,0);
// ctx.lineTo(100,50)
// ctx.stroke()

// var shape1 = new Path2D();
// ctx.strokeStyle = "red";
// shape1.arc(50,50,50,0, Math.PI*1.5);
// shape1.lineTo(100,0);
// shape1.lineTo(100,50);
// ctx.stroke(shape1)
