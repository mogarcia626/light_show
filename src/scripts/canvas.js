class SFCanvas {
    constructor() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2D')
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerWidth*0.5625
    }

    animate() {
        const h = this.canvas.height;
        const w = this.canvas.width;
        const ctx = this.ctx

        // sky gradient
        const skyGrd = ctx.createLinearGradient(0, 0.316*h, 0,0.05*h);
        skyGrd.addColorStop(0, '#775575');
        skyGrd.addColorStop(0.5, '#362E57');
        skyGrd.addColorStop(1, '#210F1F')
        ctx.fillStyle = skyGrd;
        ctx.fillRect(0, 0, w, 0.316*h);

        // ground gradient
        const groundGrd = ctx.createLinearGradient(0, 0.5*h, 0, h);
        groundGrd.addColorStop(0, '#210F1F');
        groundGrd.addColorStop(0.6, '#222222');
        groundGrd.addColorStop(0.9, 'black');
        ctx.fillStyle = groundGrd;
        ctx.fillRect(0, 0.5*h, w, h);

        // bay
        ctx.beginPath();
        ctx.moveTo(0, 0.33*h);
        ctx.lineTo(w,0.35*h);
        ctx.lineTo(w,0.4*h);
        ctx.lineTo(0,0.45*h);
        ctx.closePath();
        ctx.fillStyle = "#2B2348";
        ctx.fill();

        // SF hills
        ctx.beginPath();
        ctx.arc(0.169*w, 2.396*h, 1.24*w, 1.45*Math.PI, 1.52*Math.PI, false);
        ctx.lineTo(0.3*w, 0.19*h)
        ctx.lineTo(0.32*w, 0.2*h)
        ctx.lineTo(0.335*w, 0.2*h)
        ctx.lineTo(0.398*w, 0.237*h)
        ctx.arc(0.423*w, 0.381*h, .085*w, 1.41*Math.PI, 1.65*Math.PI, false);
        ctx.lineTo(0.519*w, 0.237*h)
        ctx.lineTo(0.55*w, 0.22*h)
        ctx.lineTo(0.56*w, 0.22*h)
        ctx.lineTo(0.581*w, 0.237*h)
        ctx.lineTo(0.69*w, 0.26*h)
        ctx.lineTo(0.75*w, 0.24*h)
        ctx.lineTo(0.8*w, 0.27*h)
        ctx.lineTo(0.85*w, 0.27*h)
        ctx.lineTo(0.9*w, 0.237*h)
        ctx.lineTo(0.95*w, 0.26*h)
        ctx.lineTo(w,0.3*h);
        ctx.lineTo(w,0.35*h);
        ctx.lineTo(0,0.33*h);
        ctx.closePath();
        ctx.fillStyle = "#0B0917";
        ctx.fill();

    }
}