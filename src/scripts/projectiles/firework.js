import {subVectors, randInt} from '../utils';

class Firework {
    constructor(props) {
        this.next = null
        this.prev = null

        this.pos = props.pos;
        this.vel = props.vel;
        this.acc = 31/32;
        this.grav = props.vel/10

        this.time = 0;
        this.color = props.color;        
        this.particles = {}
        subVectors(props.vel, randInt(6)+18 ).forEach((velVec, i) => {
            this.particles[i] = {
                vel: velVec,
                pos: this.pos,
            }
        })    
    }  

}

export default Firework

// constructor(props) {
//         this.next = null
//         this.prev = null

//         this.pos = props.pos;
//         this.vel = props.vel;
//         this.acc = 31/32;
//         this.grav = props.vel/10
        
//         this.time = 0;
//         this.color = props.color;        
//         this.particles = {}
//         subVectors(props.vel, randInt(6)+18 ).forEach((velVec, i) => {
//             this.particles[i] = {
//                 vel: velVec,
//                 pos: this.pos,
//             }
//         })    
//     }  