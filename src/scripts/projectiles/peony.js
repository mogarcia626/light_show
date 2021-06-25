import {circleVectorArray, FPS} from '../utils';
import {randInt} from '../utils';

class Peony {
    constructor(props) {
        this.pos = props.pos;
        this.vel = props.vel;
        this.color = props.color;
        this.radius = props.radius || 0.5;
        this.trailLength = props.trailLength || 15
        this.smokeLength = props.smokeLength || 10   
        this.time = 0 
        let particleVectors = []
        circleVectorArray(props.vel*1.25, 3).forEach(vel => {
            particleVectors.push( {
                vel: vel,
                pos: this.pos,
                prevPos: [],
                smokePos:[],
            })
        });
        
        this.particleVectors = particleVectors;
    }


    draw(ctx) {
        this.particleVectors.forEach(particle => {            
            //Spearhead of projectile
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(particle.pos[0], particle.pos[1], this.radius, 0, 2 * Math.PI);
            ctx.fill();
            //Trail
            particle.prevPos.forEach((trail, i) => {
                ctx.beginPath();
                ctx.arc(trail[0], trail[1], this.radius*i/this.trailLength, 0, 2 * Math.PI);
                ctx.fill(); 
            });
            //Smoke trail
            // particle.smokePos.forEach((smoke, i) => {
            //     ctx.fillStyle = 'grey'
            //     ctx.beginPath();
            //     ctx.arc(smoke[0], smoke[1], this.radius*i/this.smokeLength, 0, 2 * Math.PI);
            //     ctx.fill(); 
            // });
        });
    }

    move() {
        this.particleVectors.forEach(particle => {
            particle.prevPos.push(particle.pos)

            if (particle.prevPos.length > this.trailLength) {
                particle.smokePos.push(particle.prevPos.shift());
                if (particle.smokePos.length > this.smokeLength) particle.smokePos.shift()
            }
            
            particle.pos = [
                particle.pos[0] + particle.vel[0],
                particle.pos[1] + particle.vel[1]
            ];  

        }); 
        this.time = this.time + FPS;
    }

    

}

export default Peony