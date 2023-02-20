export function drawGraph(r, canvas, ctx, side) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    ctx.lineWidth = 2;
    const k = 2;
    ctx.fillStyle = "#00b4d8";

    //график 1 четверть
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + side / 6 * (r/k), centerY);
    ctx.lineTo(centerX + side / 6 * (r/k), centerY - side / 3 * (r/k));
    ctx.lineTo(centerX, centerY - side / 3 * (r/k));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //график 2 четверть
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - side / 3 * (r/k) , centerY);
    ctx.lineTo(centerX, centerY - side/6 * (r/k));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //график 3 четверть
    ctx.beginPath();
    const radius = side / 3 * (r/k);
    const startAngle = Math.PI * 0.5;
    const endAngle = Math.PI;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
    ctx.fill();
    ctx.closePath();
    //график 4 четверть

    //x axis
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(centerX - side/2, centerY);
    ctx.lineTo(centerX + side/2, centerY);
    ctx.stroke();
    ctx.closePath();

    //y axis
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + side/2);
    ctx.lineTo(centerX, centerY - side/2);
    ctx.stroke();
    ctx.closePath();

    //x arrow
    ctx.beginPath();
    ctx.moveTo(centerX + side/2, centerY);
    ctx.lineTo(centerX + side/2 - 10, centerY + 10);
    ctx.lineTo(centerX + side/2 - 10, centerY - 10);
    ctx.lineTo(centerX + side/2, centerY);
    ctx.fill();
    ctx.closePath();

    //y arrow
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - side/2);
    ctx.lineTo(centerX + 10, centerY - side/2 + 10);
    ctx.lineTo(centerX - 10, centerY - side/2 + 10);
    ctx.lineTo(centerX, centerY - side/2);
    ctx.fill();
    ctx.closePath();

    //пометки на числовой оси

    ctx.beginPath();
    ctx.moveTo(centerX + side/6 * (r/k), centerY);
    ctx.lineTo(centerX + side/6 * (r/k), centerY + 5);
    ctx.lineTo(centerX + side/6 * (r/k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX - side/6 * (r/k), centerY);
    ctx.lineTo(centerX - side/6 * (r/k), centerY + 5);
    ctx.lineTo(centerX - side/6 * (r/k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY + side/6 * (r/k));
    ctx.lineTo(centerX - 5, centerY + side/6 * (r/k));
    ctx.lineTo(centerX + 5, centerY + side/6 * (r/k));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - side/6 * (r/k));
    ctx.lineTo(centerX - 5, centerY - side/6 * (r/k));
    ctx.lineTo(centerX + 5, centerY - side/6 * (r/k));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX + side/3 * (r/k), centerY);
    ctx.lineTo(centerX + side/3 * (r/k), centerY + 5);
    ctx.lineTo(centerX + side/3 * (r/k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX - side/3 * (r/k), centerY);
    ctx.lineTo(centerX - side/3 * (r/k), centerY + 5);
    ctx.lineTo(centerX - side/3 * (r/k), centerY - 5);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY + side/3 * (r/k));
    ctx.lineTo(centerX - 5, centerY + side/3 * (r/k));
    ctx.lineTo(centerX + 5, centerY + side/3 * (r/k));
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY - side/3 * (r/k));
    ctx.lineTo(centerX - 5, centerY - side/3 * (r/k));
    ctx.lineTo(centerX + 5, centerY - side/3 * (r/k));
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.font = "bold 10px";

    ctx.beginPath();
    ctx.fillText("R", centerX - 20, centerY - side/3 * (r/k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("R/2", centerX - 30, centerY - side/6 * (r/k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R/2", centerX - 35, centerY + side/6 * (r/k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R", centerX - 25, centerY + side/3 * (r/k));
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R/2", centerX - side/6 * (r/k) - 10, centerY - 10);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("-R", centerX - side/3 * (r/k) - 5 , centerY - 10);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("R/2", centerX + side/6 * (r/k) - 10, centerY - 10);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText("R", centerX + side/3 * (r/k) - 5 , centerY - 10);
    ctx.closePath();
}

export function redraw(radius){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const side = canvas.width;
    ctx.fillStyle = "#00b4d8";
    ctx.clearRect(1,1, side/1.01, side/1.01);
    drawGraph(radius, canvas, ctx, side);
}

