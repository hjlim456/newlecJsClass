function Button(x, y, radius) {
    this.x = x || 0
    this.y = y || 0;
    this.radius = 30

    this.invalide()
}


Button.prototype = {

    constructor: Button,


    update: function(){
        this.radius++;
        if(this.radius>40)
            this.radius--;

        if(this.radius<30)
            this.radius++;
    

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
        console.log(isIn)
        return isIn

    },

    invalide: function () {
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
        this.radius = 40;
        this.invalide()

    }




}


30~39까지+
4~31까지 -


if(30<=this.radius&&this.radius<=39){
    radius++
}
if(31<=this.radius&&this.radius<=40){
    radius--
}

if(30<=this.radius&&this.radius<=39){
    radius++
   if(this.radius==40)
}