import {subVectors, FPS, addVectors, randInt, multiplyVector} from '../utils';

class Peony {
    constructor(props) {
        this.pos = props.pos;
        this.vel = props.vel;
        this.acc = 31/32;
        this.gravity = .0012
        this.color = props.color;
        this.radius = props.radius || 0.5;  
        this.time = props.time || 0;
        this.particles = {}
        subVectors(props.vel, 28 ).forEach((velVec, i) => {
            this.particles[i] = {
                vel: velVec,
                pos: this.pos,
            }
        })  
        this.outsideLayer = {}
        subVectors(props.vel, 21, Math.PI/7 ).forEach((velVec, i,) => {
            this.outsideLayer[i] = {
                vel: multiplyVector(velVec, 3/4),
                pos: this.pos,
            }
        }) 
        this.middleLayer = {}
        subVectors(props.vel, 14, Math.PI*2/7 ).forEach((velVec, i) => {
            this.middleLayer[i] = {
                vel: multiplyVector(velVec, 1/2),
                pos: this.pos,
            }
        })
        this.innerLayer = {}
        subVectors(props.vel, 7, Math.PI*3/7 ).forEach((velVec, i) => {
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
                particle.vel = particle.vel.map(v => v*this.acc)
                particle.vel[1] = particle.vel[1] + this.gravity
            }); 
        })
        this.time = this.time + FPS;
    }

    

}

export default Peony