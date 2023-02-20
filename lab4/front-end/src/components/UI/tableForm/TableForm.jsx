import classes from "../../../layout/styles/Graph.module.css"
import Canvas from "../canvas/Canvas";
import {useState} from "react";
import {redraw} from "../../../js/drawGraph";
const TableForm = ({sendNewHit, clearHits, handleChange, pageQty, baseUrl, page, hits, drawDots}) => {
    const [yValue, setYValue] = useState('');
    const [yDirty, setYDirty] = useState(false);
    const [yError, setYError] = useState('y не может быть пустым');
    const [isDisabled, setDisabled] = useState(false);
    const [xValue, setXValue] = useState(1);
    const [rValue, setRValue] = useState(1);

    const handler = (hits, pageQ) => {
        handleChange(hits);
        pageQty(pageQ)
    }

    const dotsHandler = (hits) => {
        drawDots(hits);
    }

    const blurHandler = () =>{
        setYDirty(true);
    }

    const yHandler = (e) => {
        let y = e.target.value;
        setYValue(y);
        let regex = "^(\\-|\\+)?\\d+(\\,|.\\d+)?$";
        if (!y.match(regex)){
            setYError("Неверный формат ввода");
            setDisabled(true);
        }
        else {
            if (y < -2.999 || y > 4.999) {
                setYError("Значение y должно быть (-3;5)");
                setDisabled(true);
                if (!y) {
                    setYError("Y не должен быть пустым");
                    setDisabled(true);
                }
            } else {
                setYError("");
                setDisabled(false);
            }
        }
    }


    function setHidden(event, value, input){
        event.preventDefault();
        switch (input){
            case "xHidden":
                setXValue(value);
                break;
            case "rHidden":
                setRValue(value);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <form>
                <div className={classes.block1}>
                    <p>Выберите Х</p>
                </div>
                <div className={classes.block2}>
                    <p>Выберите Y</p>
                </div>
                <div className={classes.block3}>
                    <p>Выберите R</p>
                </div>
                <div className={classes.xCoord}>
                    <button onClick={(event) => {setHidden(event, -2, "xHidden")}}>-2</button>
                    <button onClick={(event) => {setHidden(event, -1.5,"xHidden")}}>-1.5</button>
                    <button onClick={(event) => {setHidden(event, -1,"xHidden")}}>-1</button>
                    <button onClick={(event) => {setHidden(event, -0.5,"xHidden")}}>-0.5</button>
                    <button onClick={(event) => {setHidden(event, 0, "xHidden")}}>0</button>
                    <button onClick={(event) => {setHidden(event, 0.5, "xHidden")}}>0.5</button>
                    <button onClick={(event) => {setHidden(event, 1, "xHidden")}}>1</button>
                    <button onClick={(event) => {setHidden(event, 1.5, "xHidden")}}>1.5</button>
                    <button onClick={(event) => {setHidden(event, 2, "xHidden")}}>2</button>
                </div>
                <div className={classes.yCoord}>
                    {(yDirty && yError) && <div style={{color: "red" }}>{yError}</div>}
                    <input onChange={e => yHandler(e)} value={yValue} onBlur={blurHandler} id="yValue" className={classes.check} maxLength="5"/>
                </div>
                <div className={classes.radius}>
                    <button onClick={(event) => {setHidden(event,0.5, "rHidden"); redraw(0.5); dotsHandler(hits)}}>0.5</button>
                    <button onClick={(event) => {setHidden(event,1, "rHidden"); redraw(1); dotsHandler(hits)}}>1</button>
                    <button onClick={(event) => {setHidden(event,1.5, "rHidden"); redraw(1.5); dotsHandler(hits)}}>1.5</button>
                    <button onClick={(event) => {setHidden(event,2, "rHidden"); redraw(2); dotsHandler(hits)}}>2</button>
                </div>
                <div>
                    <input id="xHidden" type="hidden" value={xValue}/>
                </div>
                <div>
                    <input id="rHidden" type="hidden" value={rValue}/>
                </div>
                <div>
                    <Canvas handleChange={handler} page={page} pageQty={pageQty} baseURL={baseUrl}/>
                </div>
                <div className={classes.button} id="submit">
                    <button disabled={isDisabled} onClick={async (event) => {sendNewHit(event)}}>Отправить</button>
                </div>
                <div className={classes.button}>
                    <button onClick={async (event) => {clearHits(event)}}>Очистить таблицу</button>
                </div>
            </form>
        </div>
    )
}
export default TableForm;