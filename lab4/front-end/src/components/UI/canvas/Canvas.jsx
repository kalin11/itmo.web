import classes from "../tableForm/TableForm.module.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {redraw} from "../../../js/drawGraph";

const Canvas = ({handleChange, page, pageQty, baseURL}) => {

    const [firstTime, setFirstTime] = useState(true);
    
    useEffect(() => {
        if (firstTime) {
            redraw(1);
            setFirstTime(false);
        }
    }, [firstTime])

    const shoot = async (event) => {
        event.preventDefault();
        let r = document.getElementById("rHidden");
        let rect = event.target.getBoundingClientRect();
        let clientX = (event.clientX - rect.left - event.target.width / 2) / (event.target.width / 3) * 2;
        let clientY = ((-1) * (event.clientY - rect.top - event.target.height / 2)) / (event.target.width / 3) * 2;

        axios.post("http://"+ window.location.host +"/v1/hits/newHit", {
            x: clientX.toFixed(3),
            y: clientY.toFixed(3),
            r: r.value
        }, {
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(() => {
            axios.get(baseURL + `${page - 1}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }).then((result) => {
                handleChange(result.data.list);
                pageQty(Math.floor(result.data.count / 7) + 1);
            })
        })
    }

    return (
        <div>
            <canvas id="canvas" height="300" width="300" className={classes.canvas} onClick={shoot}/>
        </div>
    )
}
export default Canvas;