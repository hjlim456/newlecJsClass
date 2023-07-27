function Ball(x, y, color) {
    this.x = x || 100;
    this.y = y || 100;
    this.vx = 0;
    this.vy = 0;
    this.dx = 0;
    this.dy = 0;
    this.color = color || "black";
    this.isActive = false;
    this.radius = 30
    this.speed= 1;
}
console.log(Ball.prototype)


Ball.prototype = {

    constructor: Ball,

    
    moveTo: function (dx, dy) {

        this.dx = dx;
        this.dy = dy;

        var w = this.dx - this.x;
        var h = this.dy - this.y;
        var d = Math.sqrt(w * w + h * h);
        this.vx = w / d;
        this.vy = h / d;

    },
    update: function () {
        if (
            (this.dx - 1 < this.x && this.x < this.dx + 1) &&
            (this.dy - 1 < this.y && this.y < this.dy + 1)
        ) {
            this.vx = 0;
            this.vy = 0;
        }

        this.x += this.vx*this.speed
        this.y += this.vy*this.speed
        // console.log(this.x, this.y)
    },

    draw: function (ctx) {
        var shape = new Path2D()

        shape.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        // ctx.clearRect(0, 0, 900, 700)
        // ctx.fillStyle = this.color;
        var originColor = ctx.fillStyle
        ctx.fillStyle = this.color;
        ctx.fill(shape)
        ctx.fillStyle = originColor;

        if (this.isActive) {
            var originColor = ctx.fillStyle
            ctx.strokeStyle = "red";
            ctx.lineWidth = 5
            ctx.stroke(shape)
            ctx.strokeStyle = originColor;
        }

    },


    setActive: function (active) {
        if (active === undefined) {
            this.isActive = true;
            return;
        }

        this.isActive=active;


    },

    isLocated: function (x, y) {
        var result =
            (this.x - this.radius < x &&
                x <= this.x + this.radius) &&
            (this.y - this.radius <= y &&
                y <= this.y + this.radius)

        return result;

    }



}
