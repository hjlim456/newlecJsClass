function Button(x, y, radius) {
    this.x = x || 0
    this.y = y || 0;
    this.radius = radius||30

    this.pos = 1;
    this.invalide()
}


Button.prototype = {

    constructor: Button,

    update: function(){
        this.radius += this.pos;

        this.invalide()

        if(this.radius == 40)
         this.pos*=-1

         if(this.radius == 30)
         this.pos*=-1

    },
    draw: function (ctx) {

        var originFillStyle = ctx.fillStyle
        ctx.fillStyle = "orange";
        ctx.fill(this.shapePath)
        ctx.fillStyle = originFillStyle;

    },

    isLocated: function (x, y) {
        // var d = this.radius;
        // var root3 = Math.sqrt(3);

        // var result =
        // (y >= root3 * (x - this.x) + this.y - d) &&
        // (y >= -root3 * (x - this.x) + this.y - d) &&
        // (y <= this.y + d / 2);

        // return result;

        var isIn = ctx.isPointInPath(this.shapePath, x, y)
        console.log(isIn)//true or falase
        return isIn

    },

    invalide: function () {//update된 값들에 따라 점점 커지는삼각형

        var d = this.radius
        var hw = Math.sqrt((d * d) - ((d / 2) * (d / 2)))

        var pos1 = { x: this.x, y: this.y - d }
        var pos2 = { x: this.x - hw, y: this.y + (d / 2) }
        var pos3 = { x: this.x + hw, y: this.y + (d / 2) }

        this.shapePath = new Path2D()
        this.shapePath.moveTo(pos1.x, pos1.y)
        this.shapePath.lineTo(pos2.x, pos2.y)
        this.shapePath.lineTo(pos3.x, pos3.y)
    },

    
    action: function () {
        var intervalId = setInterval(() => {
            this.update();
        }, 5);

        setTimeout(() => {
            clearInterval(intervalId); // setInterval을 중지합니다.
            // console.log("타이머가 중지되었습니다.");
          }, 100);
    }




}

