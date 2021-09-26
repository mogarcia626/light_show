import Projectile from "./projectiles/projectile";
import * as Util from './utils';
import { randomFirework } from "./firework_utils";
import { returnToHome, openColorMenu, play } from "./nav_util";

export default class Animation {
    constructor(canvas) {
        this.canvas = canvas
        this.colorList = Util.establishColorList()
        this.active = true
        this.closed = false
        this.first = null
        this.last = null
        this.clearing = true
    }

    activate(ctx) {
        this.active = true
        this.launchFireworks(ctx);
        this.addEventListeners(ctx);
    }

    addEventListeners(ctx) {
        play(this)
        returnToHome(this)
        openColorMenu(this, ctx)
        this.fireworkOnClick()
    }

    fireworkOnClick() {
        // console.log(this.canvas.getBoundingClientRect())
        const that = this
        const bounds = that.canvas.getBoundingClientRect()
        this.canvas.addEventListener('click', function(e) {
            const h = that.canvas.height
            let clickFW = new Projectile( {
                pos: [e.pageX-bounds.left-2, e.pageY-bounds.top-2],
                vel: [Util.rand(0.6)-0.3, -h/800],
                acc: -0.008,
                color: Util.selectRandomColor(that.colorList),
                radius: Math.max(h*that.fac3d,0),
            })
            !that.first ? that.first = clickFW : Util.joinNodes(that.last, clickFW);
            that.last = clickFW
        })
    }

    render() {
        const ctx = this.canvas.getContext('2d');
        if (this.active && !this.closed) {
            if (this.clearing) ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            let firework = this.first
            while (firework) {
                firework.draw(ctx)
                firework.move()
                switch (firework.getName()) {
                    case 'Projectile':
                        if (firework.vel[1] > 0.15) {
                            const newFW = randomFirework(firework, this.fac3d*firework.pos[1]);
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
            window.requestAnimationFrame(this.render.bind(this))
        }
             
    }

}