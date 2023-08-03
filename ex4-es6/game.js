// import {test as lib1Test, test1 as lib1Test1, data} from  './modules/lib1.js';
import *as lib1 from './modules/lib1.js';

// import {test as lib2Test, test1} from "./modules/lib2.js"
import aa,{test1, test2} from "./modules/lib2.js"
import Ball from "./ball.js";

console.log(lib1.data.x);
lib1.test();

// lib1Test();//lib1 module test
test1();//lib2 module test1
aa();//lib2 module test

const balls = [
    new Ball(100, 100, "black"),
    new Ball(200, 100, "blue"),
    new Ball(300, 100, "yellow")
];

balls[2] =new Ball(200, 200, "red")




/** @type {HTMLCanvasElement} */
// var canvas = document.body.firstElementChild
let canvas = document.querySelector("#canvas")//id가 canvas인애를 캔버스로 쓰겟다.
let ctx = canvas.getContext("2d")//2d그림을 그릴거면 2d를가져와야함

balls[0].draw(ctx);

// // let upButton = new Button(800, 100, 30)



// -------------------------------------------------------------------
// var ball1 = new Ball(100, 100, "black")
// var ball2 = new Ball(200, 100, "blue")
// var ball3 = new Ball(300, 100, "yellow")


// var balls = [];
// balls.push(ball1)
// balls.push(ball2)
// balls.push(ball3)

// /** @type {HTMLCanvasElement} */
// // var canvas = document.body.firstElementChild
// var canvas = document.querySelector("#canvas")//id가 canvas인 요소를 반환한다.
//                                                 //즉 html파일에서 id가 canvas인 canvas영역을 반환한것.
// var ctx = canvas.getContext("2d")//canvas로 저장한 canvas태그영역에다가 2d그림을 그릴거다.
// var curBall = ball1;

// curBall.setActive() //인자안써주면 undefined가 전송됨


// // var upButton = new Button(800, 100)


// canvas.onclick = function (e) {//event

//     for (var ball of balls) {
//         if (ball.isLocated(e.x, e.y)) {
//             curBall.setActive(false)//다음거누를때 처음거를 꺼야되니까
//             curBall = ball;
//             curBall.setActive()
//             return;
//         }
//     }
//     curBall.moveTo(e.x, e.y)

//     // upButton.draw(ctx)

//     // if (upButton.isLocated(e.x, e.y)) {
//     //     upButton.action()

//     // }

// }//onlick 끝

// window.setInterval(function () {//setInterval도 일종의 반복이구나.

//     for (var ball of balls) {//볼을 전체를 순회하면서

//         if (curBall === ball)//현재공과 비교할공이 같으면 아래의 충돌검사를 안할것이다.
//             continue;

//         var w = curBall.x - ball.x
//         var h = curBall.y - ball.y
//         var d = Math.sqrt(w * w + h * h)
//         var rSum = curBall.radius + ball.radius
//         // console.log("d의거리는" + d, "rSUM의거리는" + rSum)

//         if (d <= rSum) {//d가 rSum보다 작아지면 충돌하면
//             var idxBall = balls.indexOf(ball)//그 해당ball의 인덱스를 찾자.
//             balls.splice(idxBall, 1)
//         }
//     }
// // ---------------------------------------------------------------
//     for (var ball of balls) {
//         ball.update()
//     }

//     ctx.clearRect(0, 0, 900, 700)
    
//     for (var ball of balls)
//         ball.draw(ctx)

//     // upButton.update();
//     // upButton.draw(ctx)

// }, 17)//mms



