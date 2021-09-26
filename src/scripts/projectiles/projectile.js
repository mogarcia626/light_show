import { Node, rand, getInputValue } from '../utils';

    class Projectile {
    constructor(x, y, fac3d, color) {
        this.next = null
        this.prev = null
        
        this.pos = [x, y];
        this.vel = [rand(.8)-0.4, y * fac3d * getInputValue('velocity')]
        this.acc = fac3d * getInputValue('acceleration')
        this.grav = fac3d * getInputValue('gravity')

        this.radius = fac3d * y * getInputValue('radius')
        this.color = color;

        this.trailFirst = null;
        this.trailLast = null
        this.smokeFirst = null
        this.smokeLast = null
        this.trailLength = 2
        this.smokeLength = 16
    } 

    draw(ctx) {
        //Smoke trail
        let smoke = this.smokeFirst
        while (smoke) {
            smoke.count++
            let [x, y] = [smoke.pos[0], smoke.pos[1]]
            let i = 0.5 * this.radius * (this.smokeLength - smoke.count) / this.smokeLength
            ctx.fillStyle = 'grey'
            ctx.beginPath();
            ctx.arc(x, y, i, 0, 2 * Math.PI);
            ctx.fill();
            smoke = smoke.next
        };
        //Trail
        let trail = this.trailFirst
        while (trail) {
            trail.count++
            let [x, y] = [trail.pos[0], trail.pos[1]]
            let i = this.radius * (0.5 + 0.5*(this.trailLength-trail.count)/this.trailLength )
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(x, y, i, 0, 2 * Math.PI);
            ctx.fill(); 
            trail = trail.next
        }
        //Spearhead of projectile
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    move() {        
        const newTrail = new Node([this.pos])
        if (!this.trailFirst) this.trailFirst = newTrail
        if (this.trailLast) this.trailLast.next = newTrail
        this.trailLast = newTrail

        let current = this.trailFirst
        while (current) {
            if (current.count === this.trailLength) {
                this.trailFirst = current.next
                current.count = 0
                current.next = null
                if (!this.smokeFirst) this.smokeFirst = current
                if (this.smokeLast) this.smokeLast.next = current
                this.smokeLast = current
            }
            current = current.next
        }

        current = this.smokeFirst
        while (current) {
            if (current.count === this.smokeLength) {
                this.smokeFirst = current.next
            }
            current = current.next
        }

        this.pos = [
            this.pos[0] + this.vel[0],
            this.pos[1] + this.vel[1]
        ];
        this.vel[1] = this.vel[1] + this.acc      
        this.acc += this.grav
    }

}

export default Projectile;