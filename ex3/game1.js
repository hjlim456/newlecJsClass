var ball1 = new Ball(100, 100, "black")
var ball2 = new Ball(200, 100, "blue")
var ball3 = new Ball(300, 100, "yellow")

var balls = [];
balls.push(ball1)
balls.push(ball2)
balls.push(ball3)

/** @type {HTMLCanvasElement} */
// var canvas = document.body.firstElementChild
var canvas = document.querySelector("#canvas")//캔버스설정한거고
var ctx = canvas.getContext("2d")//2d그림을 그릴거면 2d를가져와야함
var curBall = ball1;


curBall.setActive() //인자안써줄때는 undefined.


canvas.onclick = function (e) {//event

    for (var i in balls) {
        if (balls[i].isLocated(e.x, e.y)) {
            curBall.setActive(false)//다음거누를때 처음거를 꺼야되니까
            curBall = balls[i];
            curBall.setActive()
            return;
        }

    }
    
    curBall.moveTo(e.x, e.y)






    // if (ball1.isLocated(e.x, e.y)) {
    //     curBall.setActive(false)//다음거누를때 처음거를 꺼야되니까
    //     curBall = ball1;
    //     curBall.setActive()
    //     return;
    // }

    // if (ball2.isLocated(e.x, e.y)) {
    //     curBall.setActive(false)//다음거누를때 처음거를 꺼야되니까
    //     curBall = ball2;
    //     curBall.setActive()
    //     return;
    // }

    // curBall.moveTo(e.x, e.y)
   


}

window.setInterval(function () {//setInterval도 일종의 반복이구나.


    ctx.clearRect(0, 0, 900, 700)
    for(var i in balls){

        balls[i].update();
        balls[i].draw(ctx);
    }


    // ball1.update();
    // ball2.update();
    // ball3.update();
    // ball1.draw(ct``x)
    // ball2.draw(ctx)
    // ball3.draw(ctx)

}, 50)//mms




