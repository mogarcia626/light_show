import {subVectors, FPS, addVectors, randInt, multiplyVector} from '../utils';

class Chrysanthemum {
    constructor(props) {
        this.origin = props.pos
        this.pos = props.pos;
        this.acc = 31/32;
        this.gravity = .0012
        this.color = props.color;
        this.radius = props.radius || 0.5;  
        this.time = 0;
        this.particles = {}
        subVectors(props.vel, 24 ).forEach((velVec, i) => {
            this.particles[i] = {
                vel: velVec,
                pos: this.pos,
            }
        })
        this.middleLayer = {}
        subVectors(props.vel, 24, Math.PI/24  ).forEach((velVec, i) => {
            this.middleLayer[i] = {
                vel: multiplyVector(velVec, 2/3),
                pos: this.pos,
            }
        })
        this.innerLayer = {}
        subVectors(props.vel, 12, Math.PI/12 ).forEach((velVec, i) => {
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
                particle.vel[1] = particle.vel[1] + this.gravity
            }); 
        })
        this.time = this.time + FPS;
    }

    

}

export default Chrysanthemum