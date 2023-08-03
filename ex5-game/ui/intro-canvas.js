import Boy from "../item/boy.js"

export default class IntroCanvas {

    #obj
    #ctx
    #boy
    
    constructor() {
        /** @type {HTMLCanvasElement} */
        // var canvas = document.body.firstElementChild
        this.#obj = document.querySelector("#canvas")//id가 canvas인애를 캔버스로 쓰겟다.
        this.#obj.focus();//프로그램이 load될떄 바로 선택되게끔한다.
        this.#ctx = canvas.getContext("2d")//2d그림을 그릴거면 2d를가져와야함
        this.#boy = new Boy (300,200)
        this.#obj.onkeydown = function(){
            console.log("key down")
        }.bind(this)
    }
    run(){
        setInterval( ()=>{
            this.#boy.update()

            this.#ctx.clearRect(0,0,900,700)
            this.#boy.draw(this.#ctx)
            
        }, 17)
    }

   
}