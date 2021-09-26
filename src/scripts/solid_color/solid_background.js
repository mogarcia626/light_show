export default function drawSolidBackground(ctx, w, h, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(0, 0, w, h);
    ctx.fill();
}