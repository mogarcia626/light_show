import Projectile from "./projectiles/projectile";
import * as Util from './utils';
import { returnToHome, openColorMenu } from "./nav_util";

export default class CanvasTemplate {
    constructor() {
        this.width = 0.8*window.innerWidth;
        this.height = Math.min(0.8*window.innerWidth*0.5625, 0.8*window.innerHeight);
        this.activeFireworks = []
        this.removeFireworks = []
        this.newfireworks = []
        this.colorList = Util.establishColorList()
        this.active = true
        this.closed = false
    }

    listenFordeactivate() {
        const settingsButtons = document.getElementsByClassName('open-modal')
        Object.values(settingsButtons).forEach(button => {
            button.addEventListener('click', e => {
                this.active = false
            })
        });
    }

    activate(ctx) {
        this.active = true
        this.renderCanvas(ctx)
        this.launchFireworks(ctx);
        this.addEventListeners(ctx);
    }

    addEventListeners(ctx) {
        this.listenFordeactivate();
        returnToHome(this)
        openColorMenu(this, ctx)
        this.fireworkOnClick()
    }

    fireworkOnClick() {
        const that = this
        const canvas = document.querySelector('canvas')
        canvas.addEventListener('click', function(e) {
            const [w, h] = [that.width, that.height]
            // console.log(`[${w}, ${h}]`)
            console.log(`[${e.pageX-this.offsetLeft+w/2}, ${e.pageY-this.offsetTop+h/2}]`)
            that.activeFireworks.push(new Projectile( {
                pos: [e.pageX-this.offsetLeft+w/2, e.pageY-this.offsetTop+h/2],
                vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                acc: -0.008,
                color: Util.selectRandomColor(that.colorList),
                radius: Math.max(h*that.fac3d,0),
            }))
        })
    }

    renderCanvas(ctx) {
        let renderFireworks = setInterval( () => {
            if (this.active) {
                this.drawBackground(ctx)
                this.activeFireworks.forEach((firework, i) => {
                    firework.draw(ctx)
                    firework.move()
    
                    switch (firework.getName()) {
                        case 'Projectile':
                            if (firework.vel[1] > 0.15) {
                                this.activeFireworks[i] = Util.randomFirework(firework, this.fac3d*firework.pos[1]);
                            } 
                            break;
                        case 'Peony':
                            if (firework.time > 550) this.removeFireworks.push(i)
                            break;
                        case 'Chrysanthemum':
                            if (firework.time > 600) this.removeFireworks.push(i)               
                            break;
                        default: break;
                    }                            
                });
            }
                        
            this.removeFireworks.forEach(idx => {
                delete this.activeFireworks[idx]
            });
            this.removeFireworks = []

            this.activeFireworks = this.activeFireworks.cleanArray()
            if (this.closed) Util.freeze(renderFireworks);            
        }, Util.FPS)
    }

}

