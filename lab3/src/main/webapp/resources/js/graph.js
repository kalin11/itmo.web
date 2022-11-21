// window.addEventListener("load", () => {
//
//     const canvas = document.querySelector("#canvas");
//     const ctx = canvas.getContext("2d");
//     const side = canvas.width;
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     ctx.lineWidth = 2;
//     const k = 5;
//
//     drawGraph(1);
//
//     canvas.addEventListener("click", function (event){
//         let x = event.offsetX;
//         let y = event.offsetY;
//         let rect = canvas.getBoundingClientRect();
//         let clientX = (event.clientX - rect.left - 200) / (side / 3) * k;
//         let clientY = ((-1) * (event.clientY - rect.top - 200)) / (side / 3) * k;
//         colorizeDot(ctx, clientX, clientY, r);
//         ctx.beginPath();
//         ctx.arc(x,y,4,0,Math.PI*2);
//         ctx.fill();
//         ctx.stroke();
//         ctx.closePath();
//
//         console.log("Coordinate x: " + clientX + " ",
//             "Coordinate y: "+ clientY + " r value = " + r);
//
//     })
//
//     function drawGraph(r){
//         ctx.fillStyle = "#00b4d8";
//         //график 1 четверть
//
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY);
//         ctx.lineTo(centerX, centerY - side/6 * (r/k));
//         ctx.lineTo(centerX + side/6 * (r/k), centerY);
//         ctx.fill();
//         ctx.closePath();
//
//
//         //график 2 четверть
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY);
//         ctx.lineTo(centerX - side/3 * (r/k) , centerY);
//         ctx.lineTo(centerX - side/3 * (r/k) , centerY - side/6 * (r/k));
//         ctx.lineTo(centerX,centerY - side/6 * (r/k));
//         ctx.fill();
//         ctx.closePath();
//
//         //график 3 четверть пустой
//
//
//         //график 4 четверть
//         ctx.beginPath();
//         const radius = side / 3 * (r/k);
//         const startAngle = 0;
//         const endAngle = Math.PI * 0.5;
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY);
//         ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
//         ctx.fill();
//         ctx.closePath();
//
//         //x axis
//         ctx.fillStyle = "#000000";
//         ctx.beginPath();
//         ctx.moveTo(centerX - side/2, centerY);
//         ctx.lineTo(centerX + side/2, centerY);
//         ctx.stroke();
//         ctx.closePath();
//
//         //y axis
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY + side/2);
//         ctx.lineTo(centerX, centerY - side/2);
//         ctx.stroke();
//         ctx.closePath();
//
//         //x arrow
//         ctx.beginPath();
//         ctx.moveTo(centerX + side/2, centerY);
//         ctx.lineTo(centerX + side/2 - 10, centerY + 10);
//         ctx.lineTo(centerX + side/2 - 10, centerY - 10);
//         ctx.lineTo(centerX + side/2, centerY);
//         ctx.fill();
//         ctx.closePath();
//
//         //y arrow
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY - side/2);
//         ctx.lineTo(centerX + 10, centerY - side/2 + 10);
//         ctx.lineTo(centerX - 10, centerY - side/2 + 10);
//         ctx.lineTo(centerX, centerY - side/2);
//         ctx.fill();
//         ctx.closePath();
//
//         //пометки на числовой оси
//
//         ctx.beginPath();
//         ctx.moveTo(centerX + side/6 * (r/k), centerY);
//         ctx.lineTo(centerX + side/6 * (r/k), centerY + 5);
//         ctx.lineTo(centerX + side/6 * (r/k), centerY - 5);
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.moveTo(centerX - side/6 * (r/k), centerY);
//         ctx.lineTo(centerX - side/6 * (r/k), centerY + 5);
//         ctx.lineTo(centerX - side/6 * (r/k), centerY - 5);
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY + side/6 * (r/k));
//         ctx.lineTo(centerX - 5, centerY + side/6 * (r/k));
//         ctx.lineTo(centerX + 5, centerY + side/6 * (r/k));
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY - side/6 * (r/k));
//         ctx.lineTo(centerX - 5, centerY - side/6 * (r/k));
//         ctx.lineTo(centerX + 5, centerY - side/6 * (r/k));
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.moveTo(centerX + side/3 * (r/k), centerY);
//         ctx.lineTo(centerX + side/3 * (r/k), centerY + 5);
//         ctx.lineTo(centerX + side/3 * (r/k), centerY - 5);
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.moveTo(centerX - side/3 * (r/k), centerY);
//         ctx.lineTo(centerX - side/3 * (r/k), centerY + 5);
//         ctx.lineTo(centerX - side/3 * (r/k), centerY - 5);
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY + side/3 * (r/k));
//         ctx.lineTo(centerX - 5, centerY + side/3 * (r/k));
//         ctx.lineTo(centerX + 5, centerY + side/3 * (r/k));
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.moveTo(centerX, centerY - side/3 * (r/k));
//         ctx.lineTo(centerX - 5, centerY - side/3 * (r/k));
//         ctx.lineTo(centerX + 5, centerY - side/3 * (r/k));
//         ctx.stroke();
//         ctx.closePath();
//
//         ctx.fillStyle = "black";
//         ctx.font = "bold 10px";
//
//         ctx.beginPath();
//         ctx.fillText("R", centerX - 20, centerY - side/3 * (r/k));
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.fillText("R/2", centerX - 30, centerY - side/6 * (r/k));
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.fillText("-R/2", centerX - 35, centerY + side/6 * (r/k));
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.fillText("-R", centerX - 25, centerY + side/3 * (r/k));
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.fillText("-R/2", centerX - side/6 * (r/k) - 10, centerY - 10);
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.fillText("-R", centerX - side/3 * (r/k) - 5 , centerY - 10);
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.fillText("R/2", centerX + side/6 * (r/k) - 10, centerY - 10);
//         ctx.closePath();
//
//         ctx.beginPath();
//         ctx.fillText("R", centerX + side/3 * (r/k) - 5 , centerY - 10);
//         ctx.closePath();
//     }
//
//
//     function colorizeDot(ctx,x, y, r){
//         if (x >= 0 && y >= 0){
//             if (y <= (-x + r/2)){
//                 ctx.fillStyle="red";
//             }
//             else ctx.fillStyle="white";
//         }
//         else if (x > 0 && y < 0){
//             if (Math.pow(x,2) + Math.pow(y,2) <= Math.pow(r,2)){
//                 ctx.fillStyle="red";
//             }else ctx.fillStyle="white";
//         }
//         else if (x < 0 && y > 0){
//             if ((y <= (r / 2)) && (x >= -r)){
//                 ctx.fillStyle="red";
//             }else ctx.fillStyle="white";
//         }
//         else ctx.fillStyle="white";
//     }
//
// })