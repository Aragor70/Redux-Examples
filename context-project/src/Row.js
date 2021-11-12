import React, { Fragment, useContext } from "react";
import { PlayerContext } from "./store/store";


const Row = ({ subArry, y }) => {

    const { turn, setTurn, arry, setArry } = useContext(PlayerContext);

    const update = (x) => {
        
        const newRow = subArry.map((element, index) => index === x ? turn ? 'O' : 'X' : element)
        
        const afterUpdate = arry.map((element, index) => index === y ? newRow : element)
        
        if (turn) {
            setTurn(0)
        } else {
            setTurn(1)
        }
        
        setArry(afterUpdate)
        
    }

    return (
        <Fragment>
            <ol>
            {
                subArry.map((element, x) => <li key={x} onClick={() => element ? null : update(x)}>{element}</li>)
            }
            </ol>
        </Fragment>
    );
}
export default Row;