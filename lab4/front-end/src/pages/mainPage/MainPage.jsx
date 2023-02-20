import React, {useEffect, useState} from "react";
import TableForm from "../../components/UI/tableForm/TableForm";
import classes from "../../layout/styles/Graph.module.css"
import ResultsTable from "../../components/UI/resultsTable/ResultsTable";
import axios from "axios";
import { Pagination } from "@mui/material";
import {redraw} from "../../js/drawGraph";


const baseURL = "http://" + window.location.host + "/v1/hits/allHits/";

const MainPage = () => {
    const [hits, setHits] = useState([]);
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(1);

    useEffect( () => {
        const getData = async () => {
            const result = await axios.get(baseURL + `${page - 1}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            let list = result.data.list;
            for (let i = 0; i < list.length; i++){
                let day = list[i].date.substring(8,10);
                let month = list[i].date.substring(5,7);
                let year = list[i].date.substring(0,4);
                let time = list[i].date.substring(11,19);
                let date = new Date(month + "/" + day + "/" + year + " " + time);
                let hours = Number(date.getHours()) + Number(localStorage.getItem("usersOffset")) - 3;
                list[i].date = new Date(date.setHours(hours)).toString();
            }
            setHits(list);
            setPageQty(Math.floor(result.data.count / 7) + 1);
            drawHitsOnGraph(result.data.list);
            localStorage.setItem("access", "true");
        }

        getData().catch(console.error);

    }, [page, ]);

    const sendHewHit = async (event) => {
        event.preventDefault();
        await axios.post("http://" + window.location.host + "/v1/hits/newHit", {
            x: document.getElementById("xHidden").value,
            y: document.getElementById("yValue").value,
            r: document.getElementById("rHidden").value
        }, {
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        const result = await axios.get(baseURL + `${page - 1}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
        setPageQty(Math.floor(result.data.count / 7) + 1);
        let list = result.data.list;
        console.log(list);
        for (let i = 0; i < list.length; i++){
            let day = list[i].date.substring(8,10);
            let month = list[i].date.substring(5,7);
            let year = list[i].date.substring(0,4);
            let time = list[i].date.substring(11,19);
            let date = new Date(month + "/" + day + "/" + year + " " + time);
            let hours = Number(date.getHours()) + Number(localStorage.getItem("usersOffset")) - 3;
            list[i].date = new Date(date.setHours(hours)).toString();
        }
        setHits(list);
        drawHitsOnGraph(result.data.list);
    }

    const clearHits = async (event) => {
        event.preventDefault();
        await axios.delete("http://" + window.location.host + "/v1/hits/delete", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        setHits([]);
        setPage(1);
        setPageQty(1);
        redraw(document.getElementById("rHidden").value);
    }

    const handleCanvas = (hits) => {
        let list = hits;
        for (let i = 0; i < list.length; i++){
            let day = list[i].date.substring(8,10);
            let month = list[i].date.substring(5,7);
            let year = list[i].date.substring(0,4);
            let time = list[i].date.substring(11,19);
            let date = new Date(month + "/" + day + "/" + year + " " + time);
            let hours = Number(date.getHours()) + Number(localStorage.getItem("usersOffset")) - 3;
            list[i].date = new Date(date.setHours(hours)).toString();
        }
        setHits(list);
        drawHitsOnGraph(hits);
    }

    const handlePageQty = (pageQty) => {
        setPageQty(pageQty);
    }

    const drawHitsOnGraph = (hits) => {
        let canvas = document.getElementById("canvas");
        let width = canvas.width;
        const k = 2;
        let ctx = canvas.getContext("2d");

        for (let i = 0; i < hits.length; i++){
            let color;
            let resultX = hits[i].x;
            let resultY = hits[i].y;
            let resultHitted = hits[i].hitted;
            let canvasX = (resultX * width) / (3 * k) + 150;
            let canvasY = (resultY * width) / (-3 * k) + 150;
            if (resultHitted){
                color = "green";
            }else color = "red";
            ctx.beginPath();
            ctx.arc(canvasX, canvasY, 4, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }


    }

    return (
        <div>
            <div className={classes.first}>
                <TableForm sendNewHit={sendHewHit}
                           clearHits={clearHits}
                           handleChange={handleCanvas}
                           pageQty={handlePageQty}
                           baseUrl={baseURL}
                           page={page}
                           hits={hits}
                           drawDots={drawHitsOnGraph}/>
            </div>
            <div className={classes.second}>
                <ResultsTable hits={hits}/>
                {!!pageQty &&
                    <Pagination
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginX:'auto',
                        }}
                        style={{
                        width: "100%",
                        position: "absolute",
                        bottom: "5px",
                    }} color="primary"
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => {
                        setPage(num);
                        redraw(document.getElementById("rHidden").value);
                    }}
                />
                }
            </div>

        </div>
    )
}

export default MainPage;