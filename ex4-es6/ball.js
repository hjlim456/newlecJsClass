export default class Ball{
    #x;
    #y;
    #vx;
    #vy;
    #dx;
    #dy;
    #color;
    #isActive;
    #radius;
    #speed;
    constructor(x=100, y=100, color ="black"){

        this.#x = x ;
        this.#y = y;
        this.#vx = 0;
        this.#vy = 0;
        this.#dx = 0;
        this.#dy = 0;
        this.#color = color;
        this.#isActive = false;
        this.#radius = 30
        this.#speed= 1;

    }


    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }
    get radius(){
        return this.#radius;
    }

    moveTo(dx, dy) {

        this.#dx = dx;
        this.#dy = dy;

        let w = this.#dx - this.#x;
        let h = this.#dy - this.#y;
        let d = Math.sqrt(w * w + h * h);
        this.#vx = w / d;
        this.#vy = h / d;

    }
    update() {
        if (
            (this.#dx - 1 < this.#x && this.#x < this.#dx + 1) &&
            (this.#dy - 1 < this.#y && this.#y < this.#dy + 1)
        ) {
            this.#vx = 0;
            this.#vy = 0;
        }

        this.#x += this.#vx*this.#speed
        this.#y += this.#vy*this.#speed
        // console.log(this.x, this.y)
    }

    draw(ctx) {
        let shape = new Path2D()

        shape.arc(this.#x, this.#y, this.#radius, 0, Math.PI * 2)
      
        let originColor = ctx.fillStyle
        ctx.fillStyle = this.#color;
        ctx.fill(shape)
        ctx.fillStyle = originColor;

        if (this.#isActive) {
            let originColor = ctx.fillStyle
            ctx.strokeStyle = "red";
            ctx.lineWidth = 5
            ctx.stroke(shape)
            ctx.strokeStyle = originColor;
        }

    }


    setActive(active) {
        if (active === undefined) {
            this.#isActive = true;
            return;
        }

        this.#isActive=active;


    }

    isLocated(x, y) {
        var result =
            (this.#x - this.#radius < x &&
                x <= this.#x + this.#radius) &&
            (this.#y - this.#radius <= y &&
                y <= this.#y + this.#radius)

        return result;

    }




}


// export { Ball};






