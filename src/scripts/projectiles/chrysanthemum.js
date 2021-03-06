import {subVectors, addVectors, randInt, multiplyVector} from '../utils';
import Firework from './firework';

class Chrysanthemum extends Firework {
    constructor(props) {
        super(props)        
        this.radius = props.radius || 0.5;
        this.origin = props.pos
        this.middleLayer = {}
        subVectors(props.vel, randInt(4)+14  ).forEach((velVec, i) => {
            this.middleLayer[i] = {
                vel: multiplyVector(velVec, 2/3),
                pos: this.pos,
            }
        })
        this.innerLayer = {}
        subVectors(props.vel, randInt(4)+8).forEach((velVec, i) => {
            this.innerLayer[i] = {
                vel: multiplyVector(velVec, 1/3),
                pos: this.pos,
            }
        })   
    }


    draw(ctx) {
        let particle;
        [this.particles, this.middleLayer, this.innerLayer].forEach(layer => {

            Object.keys(layer).forEach(i => {  
                particle = layer[`${i}`];

                ctx.strokeStyle = this.color;
                ctx.beginPath();
                ctx.moveTo(this.origin[0], this.origin[1]);
                ctx.lineTo(particle.pos[0], particle.pos[1]);
                ctx.stroke();
            });            
        });        
    }

    move() {
        let particle;
        [this.particles, this.middleLayer, this.innerLayer].forEach(layer => {
            Object.keys(layer).forEach(i  => {
                particle = layer[`${i}`];   
                particle.pos = addVectors(particle.pos, particle.vel);    
                particle.vel = particle.vel.map(v => v*this.acc)
                particle.pos = addVectors(particle.pos, [0, this.grav])
                }); 
            })
        this.origin = addVectors(this.origin, [0, this.grav])
        this.time++;
    }
}

export default Chrysanthemum