
import Boy from "./item/boy.js";
// import aa from "./boy.js"



/** @type {HTMLCanvasElement} */
// var canvas = document.body.firstElementChild
let canvas = document.querySelector("#canvas")//id가 canvas인애를 캔버스로 쓰겟다.
let ctx = canvas.getContext("2d")//2d그림을 그릴거면 2d를가져와야함


let boy = new Boy(300,200);
boy.draw(ctx);