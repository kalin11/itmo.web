const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const side = canvas.width;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.lineWidth = 2;
const k = 5;
function redraw(radius){
    let r = radius;
    ctx.clearRect(1,1, side/1.01, side/1.01);
    drawGraph(r);
}

setInterval(drawDots, 100, ctx);

function drawGraph(r){
    ctx.fillStyle = "#00b4d8";
    //график 1 четверть

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - side/6 * (r/k));
    ctx.lineTo(centerX + side/6 * (r/k), centerY);
    ctx.fill();
    ctx.closePath();


    //график 2 четверть
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - side/3 * (r/k) , centerY);
    ctx.lineTo(centerX - side/3 * (r/k) , centerY - side/6 * (r/k));
    ctx.lineTo(centerX,centerY - side/6 * (r/k));
    ctx.fill();
    ctx.closePath();

    //график 3 четверть пустой


    //график 4 четверть
    ctx.beginPath();
    const radius = side / 3 * (r/k);
    const startAngle = 0;
    const endAngle = Math.PI * 0.5;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
    ctx.fill();
    ctx.closePath();

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

function drawDots(ctx) {

    let table = document.getElementById("result-table-body");

    for (let i = 1; i < table.rows.length; i++) {
        let tableX = table.rows[i].cells[0].innerText;
        let tableY = table.rows[i].cells[1].innerText;
        let tableWasHit = table.rows[i].cells[3].innerText;
        let color;
        if (tableX !== "" && tableY !== "") {
            let canvasX = (tableX * side) / (3 * k) + 200;
            let canvasY = (tableY * side) / (-3 * k) + 200;
            if (tableWasHit === "true") {
                color = "red";
            } else color = "white";
            ctx.beginPath();
            ctx.arc(canvasX, canvasY, 4, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
    }
}