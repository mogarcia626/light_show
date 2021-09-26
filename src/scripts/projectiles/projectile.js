import { FPS } from '../utils';

    class Projectile {
    constructor(props) {
        this.next = null
        this.prev = null
        this.pos = props.pos;
        this.vel = props.vel;
        this.acc = props.acc;
        this.color = props.color;
        this.gravity = 0.12;
        this.radius = props.radius || 0.5;
        this.prevPos = [];
        this.smokePos = []
        this.trailLength = props.trailLength || 3
        this.smokeLength = props.smokeLength || 12
    }    
    
    draw(ctx) {
        //Smoke trail
        this.smokePos.forEach((smoke, i) => {
            ctx.fillStyle = 'grey'
            ctx.beginPath();
            ctx.arc(smoke[0], smoke[1], this.radius*(i+1)/(2*this.smokePos.length), 0, 2 * Math.PI);
            ctx.fill(); 
        });
        //Trail
        this.prevPos.forEach((trail, i) => {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(trail[0], trail[1], this.radius*(0.5+(i+1)/(2*this.trailLength)), 0, 2 * Math.PI);
            ctx.fill(); 
        });
        //Spearhead of projectile
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    move() {
        this.prevPos.push(this.pos)        
        if (this.prevPos.length > this.trailLength) {
            this.smokePos.push(this.prevPos.shift());
            if (this.smokePos.length > this.smokeLength) this.smokePos.shift()
        }
        this.pos = [
            this.pos[0] + this.vel[0],
            this.pos[1] + this.vel[1]
        ];
        this.vel[1] = this.vel[1] + this.acc        
        this.acc = Math.min(this.acc+.0005, this.gravity)
    }

}

export default Projectile;