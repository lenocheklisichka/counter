import React, {useState} from "react";
import {Button} from "../Button/Button";

export function Counter() {
    let [counterState, setCounterState] = useState<number>(0);
    let [disabled, setDisabled] = useState<boolean>(true)
    const MAX_COUNTER_VALUE = 5;

    const changeCounterState = () => {
        setCounterState(++counterState)
        setDisabled(false)
    }

    const resetCounterState = () => {
        setCounterState(0)
        setDisabled(true)
    }

    return (
        <div>
            <div className="counter">
                <div className={counterState === MAX_COUNTER_VALUE ? "counter-disabled" : " "}
                     style={{marginTop: "35px"}}>{counterState}</div>
            </div>
            <div className="block-button">
                <div className="button-counter">
                    <Button title={'inc'} className={'button-inc'} disabled={counterState === MAX_COUNTER_VALUE} onClick={changeCounterState} />
                    <Button title={'reset'} className={'button-reset'} disabled={disabled} onClick={resetCounterState}/>
                </div>
            </div>
        </div>
    )
}

