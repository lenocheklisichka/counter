import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {
    let [counterState, setCounterState] = useState<number>(0)
    let [disabled, setDisabled] = useState<boolean>(true)

    const changeCounterState = () => {
        setCounterState(++counterState)
        setDisabled(false)
    }

    const resetCounterState = () => {
        setCounterState(0)
        setDisabled(true)
    }
    return (
        <div className="App">
            <Counter changeCounterState={changeCounterState}
                     counterState={counterState}
                     disabled={disabled}
                     resetCounterState={resetCounterState}/>
        </div>
    );
}

export default App;
