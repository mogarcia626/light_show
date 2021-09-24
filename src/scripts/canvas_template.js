import Projectile from "./projectiles/projectile";
import * as Util from './utils';
import { returnToHome, openColorMenu, pause } from "./nav_util";

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
        this.first = null
        this.last = null
    }

    activate(ctx) {
        this.active = true
        this.renderCanvas(ctx)
        this.launchFireworks(ctx);
        this.addEventListeners(ctx);
    }

    addEventListeners(ctx) {
        pause(this)
        returnToHome(this)
        openColorMenu(this, ctx)
        this.fireworkOnClick()
    }

    fireworkOnClick() {
        const that = this
        const canvas = document.querySelector('canvas')
        const bounds = canvas.getBoundingClientRect()
        canvas.addEventListener('click', function(e) {
            const [w, h] = [that.width, that.height]
            let clickFW = new Projectile( {
                pos: [e.pageX-bounds.left-2, e.pageY-bounds.top-2],
                vel: [(Util.rand(0.5*w)/w)-0.25, -h/800],
                acc: -0.008,
                color: Util.selectRandomColor(that.colorList),
                radius: Math.max(h*that.fac3d,0),
            })
            !that.first ? that.first = clickFW : Util.joinNodes(that.last, clickFW);
            that.last = clickFW
        })
    }

    renderCanvas(ctx) {
        let renderFireworks = setInterval( () => {
            if (this.active) {
                this.drawBackground(ctx)

                let firework = this.first
                while (firework) {
                    firework.draw(ctx)
                    firework.move()

                    switch (firework.getName()) {
                        case 'Projectile':
                            if (firework.vel[1] > 0.15) {
                                const newFW = Util.randomFirework(firework, this.fac3d*firework.pos[1]);
                                if (this.first===firework) this.first = newFW
                                Util.replaceNode(firework, newFW)
                            } 
                            break;
                        case 'Peony':
                            if (firework.time > 550) {
                                if (this.first === firework) this.first = firework.next
                                Util.removeNode(firework)
                            }
                            break;
                        case 'Chrysanthemum':
                            if (firework.time > 600) {
                                if (this.first === firework) this.first = firework.next
                                Util.removeNode(firework)
                            }
                        default: break;
                    }  
                    
                    firework = firework.next
                };
            }
             
            if (this.closed) Util.freeze(renderFireworks);            
        }, Util.FPS)
    }

}