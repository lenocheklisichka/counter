import React from "react";
import {Button} from "../Button/Button";

type CounterPropsType = {
    counterState: number;
    disabled: boolean;
    changeCounterState: () => void;
    resetCounterState: () => void;
}

export function Counter(props: CounterPropsType) {
    const MAX_COUNTER_VALUE = 5;
    return (
        <div>
            <div className="counter">
                <div className={props.counterState === MAX_COUNTER_VALUE ? "counter-disabled" : " "}
                     style={{marginTop: "35px"}}>{props.counterState}</div>
            </div>
            <div className="block-button">
                <div className="button-counter">
                    <Button title={'inc'} className={'button-inc'} disabled={props.counterState === MAX_COUNTER_VALUE} onClick={props.changeCounterState} />
                    <Button title={'reset'} className={'button-reset'} disabled={props.disabled} onClick={props.resetCounterState}/>
                </div>
            </div>
        </div>
    )
}

