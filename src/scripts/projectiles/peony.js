import {subVectors, FPS, addVectors, randInt, multiplyVector} from '../utils';
import Firework from './firework';

class Peony extends Firework {
    constructor(props) { 
        super(props)        
        this.radius = props.radius || 0.5;    
        this.outsideLayer = {}
        subVectors(props.vel, randInt(4)+12 ).forEach((velVec, i,) => {
            this.outsideLayer[i] = {
                vel: multiplyVector(velVec, 3/4),
                pos: this.pos,
            }
        }) 
        this.middleLayer = {}
        subVectors(props.vel, randInt(3)+9,).forEach((velVec, i) => {
            this.middleLayer[i] = {
                vel: multiplyVector(velVec, 1/2),
                pos: this.pos,
            }
        })
        this.innerLayer = {}
        subVectors(props.vel, randInt(2)+4 ).forEach((velVec, i) => {
            this.innerLayer[i] = {
                vel: multiplyVector(velVec, 0.25),
                pos: this.pos,
            }
        })   
    }

    draw(ctx) {
        let particle;

        [this.particles, this.outsideLayer, this.middleLayer, this.innerLayer].forEach(layer => {

            Object.keys(layer).forEach(i => {  
                particle = layer[`${i}`];

                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(particle.pos[0], particle.pos[1], this.radius, 0, 2 * Math.PI);
                ctx.fill();
            });            
        });        
    }

    move() {
        let particle;
        [this.particles, this.outsideLayer, this.middleLayer, this.innerLayer].forEach(layer => {
            Object.keys(layer).forEach(i  => {
                particle = layer[`${i}`];            
                particle.pos = addVectors(particle.pos, particle.vel);    
                particle.vel = particle.vel.map(v => v*31/32)
                    particle.pos = addVectors(particle.pos, [0, this.vel/10])
            }); 
        })
        this.time += FPS;
    }  
}

export default Peony