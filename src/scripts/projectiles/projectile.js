import { FPS } from '../utils';

    class Projectile {
    constructor(props) {
        this.pos = props.pos;
        this.vel = props.vel;
        this.acc = props.acc;
        this.color = props.color;
        this.gravity = 0.12;
        this.radius = props.radius || 0.5;
        this.prevPos = [];
        this.smokePos = []
        this.trailLength = props.trailLength || 6
        this.smokeLength = props.smokeLength || 24 
        this.time = 0
    }    
    
    draw(ctx) {
        //Spearhead of projectile
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
        //Trail
        this.prevPos.forEach((trail, i) => {
            ctx.beginPath();
            ctx.arc(trail[0], trail[1], this.radius/4 + 3*this.radius*(i+1)/(4*this.trailLength), 0, 2 * Math.PI);
            ctx.fill(); 
        });
        //Smoke trail
        this.smokePos.forEach((smoke, i) => {
            ctx.fillStyle = 'grey'
            ctx.beginPath();
            ctx.arc(smoke[0], smoke[1], this.radius/4, 0, 2 * Math.PI);
            ctx.fill(); 
        });
    }

    move() {
        if (this.time%2==0) {
            this.prevPos.push(this.pos)
            if (this.prevPos.length > this.trailLength) {
                this.smokePos.push(this.prevPos.shift());
                if (this.smokePos.length > this.smokeLength) this.smokePos.shift()
            }
        }
        this.pos = [
            this.pos[0] + this.vel[0],
            this.pos[1] + this.vel[1]
        ];
        this.vel[1] = this.vel[1] + this.acc        
        this.acc = Math.min(this.acc+.0005, this.gravity)
        this.time += 1
    }

}

export default Projectile;