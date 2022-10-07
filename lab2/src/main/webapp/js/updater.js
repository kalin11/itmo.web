$(document).ready(function () {
    $.ajax({
        url: "/last-1.0-SNAPSHOT/ctrl-sev",
        async: true,
        type: "POST",
        cache: false,
        data : {
            "old" : "yes"
        },
        success: function (response) {
            restore(response);
        }

    })
})

function restore(response){
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    const side = canvas.width;
    let rows = response.split('\n');
    rows.forEach(function (value, index, array){
        let columns = value.split(' ');
        let x = parseFloat(columns[0]);
        let y = parseFloat(columns[1]);
        let r = parseFloat(columns[2]);

        x = (x*side)/(3*r) + 200;
        y = (-1)*(y*side)/(3*r) + 200;

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI*2, );
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    })
}