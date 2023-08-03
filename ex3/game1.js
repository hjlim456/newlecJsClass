var ball1 = new Ball(100, 100, "black")
var ball2 = new Ball(200, 100, "blue")
var ball3 = new Ball(300, 100, "yellow")


var balls = [];
balls.push(ball1)
balls.push(ball2)
balls.push(ball3)

/** @type {HTMLCanvasElement} */
// var canvas = document.body.firstElementChild
var canvas = document.querySelector("#canvas")//id가 canvas인 요소를 반환한다.
                                                //즉 html파일에서 id가 canvas인 canvas영역을 반환한것.
var ctx = canvas.getContext("2d")//canvas로 저장한 canvas태그영역에다가 2d그림을 그릴거다.
var curBall = ball1;

curBall.setActive() //인자안써주면 undefined가 전송됨


var upButton = new Button(800, 100)


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

}//onlick 끝

window.setInterval(function () {//setInterval도 일종의 반복이구나.

    for (var ball of balls) {//볼을 전체를 순회하면서

        if (curBall === ball)//현재공과 비교할공이 같으면 아래의 충돌검사를 안할것이다.
            continue;

        var w = curBall.x - ball.x
        var h = curBall.y - ball.y
        var d = Math.sqrt(w * w + h * h)
        var rSum = curBall.radius + ball.radius
        // console.log("d의거리는" + d, "rSUM의거리는" + rSum)

        if (d <= rSum) {//d가 rSum보다 작아지면 충돌하면
            var idxBall = balls.indexOf(ball)//그 해당ball의 인덱스를 찾자.
            balls.splice(idxBall, 1)
        }
    }
// ---------------------------------------------------------------
    for (var ball of balls) {
        ball.update()
    }

    ctx.clearRect(0, 0, 900, 700)
    
    for (var ball of balls)
        ball.draw(ctx)

    // upButton.update();
    upButton.draw(ctx)

}, 17)//mms



