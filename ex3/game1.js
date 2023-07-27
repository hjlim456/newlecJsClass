var ball1 = new Ball(100, 100, "black")
var ball2 = new Ball(200, 100, "blue")
var ball3 = new Ball(300, 100, "yellow")


var balls = [];
balls.push(ball1)
balls.push(ball2)
balls.push(ball3)

/** @type {HTMLCanvasElement} */
// var canvas = document.body.firstElementChild
var canvas = document.querySelector("#canvas")//id가 canvas인애를 캔버스로 쓰겟다.
var ctx = canvas.getContext("2d")//2d그림을 그릴거면 2d를가져와야함
var curBall = ball1;

curBall.setActive() //인자안써주면 undefined가 전송됨


var upButton = new Button(800, 100, 30)


canvas.onclick = function (e) {//event

    for (var ball of balls) {
        if (ball.isLocated(e.x, e.y)) {
            curBall.setActive(false)//다음거누를때 처음거를 꺼야되니까
            curBall = ball;
            curBall.setActive()
            return;
        }
    }
    curBall.moveTo(e.x, e.y)

    upButton.draw(ctx)

    if (upButton.isLocated(e.x, e.y)) {
        upButton.action()

    }

}

window.setInterval(function () {//setInterval도 일종의 반복이구나.

    for (var ball of balls) {//볼을 전체를 순회하면서

        if (curBall === ball)
            continue;


        var w = curBall.x - ball.x
        var h = curBall.y - ball.y
        var d = Math.sqrt(w * w + h * h)
        var rSum = curBall.radius + ball.radius
        // console.log("d의거리는" + d, "rSUM의거리는" + rSum)

        if (d <= rSum) {
            var idxBall = balls.indexOf(ball)
            balls.splice(idxBall, 1)
        }
    }



   
    for (var ball of balls){
        ball.update()
       
    }
    ctx.clearRect(0, 0, 900, 700)

    for (var ball of balls)
        ball.draw(ctx)

    upButton.update();
    upButton.draw(ctx)

}, 17)//mms




