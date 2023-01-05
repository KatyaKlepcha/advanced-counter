import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingsCounter from "./components/SettingsCounter/SettingsCounter";


function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [count, setCount] = useState(0)
    let [text, setText] = useState('Enter values and press "set"')
    let [disabled, setDisabled] = useState(false)

    const incorrectValue = 'Incorrect value'
    const enterValue = 'Enter values and press "set"'

    const settingsDisabled = startValue < 0
        || maxValue < 0
        || startValue === maxValue
        || maxValue < startValue


    useEffect(() => {
        setDisabled(true)
        let startValueAsString = localStorage.getItem('counterStartValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }

        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    const increaseCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(startValue)
    }

    const setToLocalStorage = () => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))

        setCount(startValue)
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))

        setDisabled(false)
    }

    const onChangeStartValue = (startValue: number) => {
        if (startValue < 0 || maxValue === startValue) {
            setText(incorrectValue)
        } else if (startValue < maxValue) {
            setText(enterValue)
        }

        setStartValue(startValue)
        setDisabled(true)
    }

    const onChangeMaxValue = (maxValue: number) => {
        const errorMaxValue = (maxValue === startValue) || maxValue < startValue || maxValue < 0 || startValue < 0

        if (errorMaxValue) {
            setText(incorrectValue)
        } else if (startValue < maxValue || startValue === 0) {
            setText(enterValue)
        }

        setMaxValue(maxValue)
        setDisabled(true)
    }


    return (
        <div className="App">
            <SettingsCounter startValue={startValue}
                             maxValue={maxValue}
                             disabled={settingsDisabled}
                             onChangeStartValue={onChangeStartValue}
                             onChangeMaxValue={onChangeMaxValue}
                             setCount={setCount}
                             setToLocalStorage={setToLocalStorage}
            />
            <Counter
                count={count}
                text={text}
                maxValue={maxValue}
                startValue={startValue}
                increaseCount={increaseCount}
                resetCount={resetCount}
                disabled={disabled}
                settingsDisabled={settingsDisabled}
            />
        </div>
    );
}

export default App;
