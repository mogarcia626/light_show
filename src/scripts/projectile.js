class Projectile {
    constructor(props) {
        this.pos = props.pos;
        this.vel = props.vel;
        this.acc = props.acc;
        this.color = props.color;
        this.gravity = 0.098;
        this.radius = 0.5;
        this.prevPos = [];
        this.trailLength = 20
        
    }
    
    
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
        
        this.prevPos.forEach((trail, i) => {
            ctx.beginPath();
            ctx.arc(trail[0], trail[1], this.radius*i/this.trailLength, 0, 2 * Math.PI);
            ctx.fill(); 
        });

    }

    move() {
        this.prevPos.push(this.pos)
        if (this.prevPos.length > this.trailLength) this.prevPos.shift();
        
        this.pos = [
            this.pos[0] + this.vel[0],
            this.pos[1] + this.vel[1]
        ];
        this.vel[1] = this.vel[1] + this.acc        
        this.acc = Math.min(this.acc+0.0005, this.gravity)
    }

}

export default Projectile;