export default class Boy {
    #x
    #y
    #img
    #imgWalkingIndex
    #walkingDelay
    #imgDirectionIndex
    #isWalking
    constructor(x = 0, y = 0) {
        this.#x = x
        this.#y = y
        this.#img = document.querySelector("img")
        this.#imgWalkingIndex = 0;
        this.#walkingDelay = 30;
        this.#imgDirectionIndex=0;
        this.#isWalking=false;


    }
    /** @param {CanvasRenderingContext2D} ctx */  //ctx에 .썻을때 자동완성이 활성화된다.


    moveTo(x,y){
        this.#isWalking =true;
    }

    update() {
        if (this.#isWalking && this.#walkingDelay == 0) {
            this.#imgWalkingIndex++;
            this.#walkingDelay = 15
        }
        this.#imgWalkingIndex %= 4;//if조건문대신해서 1~4숫자를반복하게해준다
        this.#walkingDelay--;
    }


    draw(ctx) {
        let w = 48;//변화에 유용하게대처하기위해 sw:소스의 너비dw:목적지의 너비
        let h = 48;
        // ctx.drawImage(this.#img,this.#x, this.#y)
        // ctx.drawImage(this.#img,this.#x, this.#y, 192*2,192*2)

        ctx.drawImage(
            //---------------이미지--------------------
            this.#img,

            //-----------캐릭터 속성---------------------
            w*this.#imgDirectionIndex,//캐릭터 방향
            h * this.#imgWalkingIndex,//움직임 별 인덱스
            w,//케릭터 넓이
            h,//케릭터 높이

            //------------------케릭터위치-----------
            this.#x - w / 2,//기준점을 좌상단으로 땡기기x축
            this.#y - h / 2,//기준점을 좌상단으로 땡기기y축
            w,//크기
            h//높이
            )
        //img 0,0좌표에서부터 48,48만큼 드래그한부분을 #x,#y좌표에  마지막은 너비
        // ctx.drawImage(this.#img,48*3,0 ,48, 48,this.#x+48, this.#y+48, 48*2,48*2)
        ctx.arc(this.#x, this.#y, 5, 0, Math.PI * 2)
        ctx.stroke();
        ctx.strokeStyle = "#ffff"
    }


}