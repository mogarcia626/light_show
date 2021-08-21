export function drawBayAreaBackground(ctx, w, h) {
    // fill rectancle
    ctx.fillStyle = '#210F1F';
    ctx.beginPath();
    ctx.rect(0,0,w,h);
    ctx.rect(0, 0, w, h);
    ctx.fill();

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
    ctx.moveTo(0, 0.215*h);
    ctx.lineTo(0.01*w, 0.215*h)
    ctx.lineTo(0.02*w, 0.205*h)
    ctx.lineTo(0.025*w, 0.205*h)
    ctx.lineTo(0.035*w, 0.216*h)
    ctx.lineTo(0.12*w, 0.205*h)
    ctx.lineTo(0.125*w, 0.21*h)
    ctx.lineTo(0.138*w, 0.205*h)
    ctx.lineTo(.15*w, 0.19*h)
    ctx.lineTo(0.168*w, 0.207*h)
    ctx.lineTo(0.18*w, 0.205*h)
    ctx.lineTo(0.193*w, 0.191*h)
    ctx.lineTo(0.205*w, 0.194*h)
    ctx.lineTo(0.21*w, 0.2*h)
    ctx.lineTo(0.24*w, 0.205*h)
    ctx.lineTo(0.254*w, 0.18*h)
    ctx.lineTo(0.281*w, 0.185*h)
    ctx.lineTo(0.297*w, 0.17*h)
    ctx.lineTo(0.328*w, 0.205*h)
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