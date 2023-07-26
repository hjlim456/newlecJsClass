var x = 100;
var y = 100;
var vx = 0;
var vy = 0;

var x2 = 200;
var y2 = 100;
// console.log(typeof localStorage.getItem("y"))


/** @type {HTMLCanvasElement} */
// var canvas = document.body.firstElementChild
var canvas = document.querySelector("#canvas")//캔버스설정한거고

canvas.onclick = function (e) {//event

    dx = e.x;
    dy = e.y;
    var w = (dx - x);
    var h = (dy - y)
    var d = Math.sqrt(w * w, + h * h);
    vx = w / d;//
    vy = h / d;
    // localStorage.setItem('x',x);
    // localStorage.setItem('y',y);
    // var ball = new Path2D();
    // ball.arc(e.x, e.y, 30, 0, Math.PI * 2)//그리는거아님

    // ctx.clearRect(0, 0, 900, 700)
    // ctx.fill(ball)

}
window.setInterval(function () {

    if (
        (dx - 1 < x && x < dx + 1) &&
        (dy - 1 < y && y < dy + 1)
    ) {
        vx = 0;
        vy = 0;
    }

    x += vx
    y += vy
}, 50)
  

    var ctx = canvas.getContext("2d")//2d그림을 그릴거면 2d를가져와야함
    var ball = new Path2D()
    ball.arc(x, y, 30, 0, Math.PI * 2)
    ctx.clearRect(0, 0, 900, 700)
    ctx.fill(ball)

    var ball2 = new Path2D();
    ball2.arc(x2, y2, 30, 0, Math.PI * 2)
   
    ctx.fillStyle = "blue"
    ctx.fill(ball2);
