import React from "react";
import classes from "./ResultsTable.module.css"

const ResultsTable = (props) => {

    return (
        <div className={props.type}>{
            !props.hits ? "loading..." :
            <table className={classes.table} id="resultTable">
                <input id="usersOffset" type="hidden"/>
                <thead>
                    <tr>
                        <th className={classes.xHeader}>X</th>
                        <th className={classes.yHeader}>Y</th>
                        <th className={classes.rHeader}>R</th>
                        <th className={classes.result}>Попадание</th>
                        <th className={classes.scriptTime}>Время скрипта</th>
                        <th className={classes.hitTime}>Время выстрела</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.hits.map((hit,index) => (
                        <tr key={index}>
                            <td className={classes.item}>{hit.x}</td>
                            <td className={classes.item}>{hit.y}</td>
                            <td className={classes.item}>{hit.r}</td>
                            <td className={classes.item}>{hit.hitted ? "+" : "-"}</td>
                            <td className={classes.item}>{Math.round(hit.time)} мс</td>
                            <td className={classes.item}>{hit.date.substring(16,24)}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        }
        </div>
    )
}

export default ResultsTable;