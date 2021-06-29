export default class SolidCanvas {
    constructor(color) {
        this.width = 0.96*window.innerWidth;
        this.height = Math.min(0.96*window.innerWidth*0.5625, 0.96*window.innerHeight);
        this.color = color
    }
    
    draw(ctx) {
        const h = this.height;
        const w = this.width;

        // fill rectangle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(0, 0, w, h);
        ctx.fill();
    }

}

