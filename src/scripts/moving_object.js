function MovingObject(ctx) {
    this.pos = [0,0];
    // this.pos = createVector(x,y);
    this.vel = [1, 0.5625];
    // this.vel = createVector(x, y);
    this.acc = [0,0];
    // this.acc = createVector(x, y);

    this.radius = 5;
    this.color = "#696969";

    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    // this.show = function() {

    // }
}

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
};

module.exports = MovingObject;