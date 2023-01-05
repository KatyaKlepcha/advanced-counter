import React from 'react';
import Display from "../Display/Display";
import Button from "../Button/Button";

type CounterType = {
    count: number
    text: string
    maxValue: number
    startValue: number
    increaseCount: () => void
    resetCount: () => void
    disabled: boolean
    settingsDisabled: boolean
}

const Counter = (props: CounterType) => {
    return (
        <div className={'counter'}>
            <Display count={props.count}
                     maxValue={props.maxValue}
                     startValue={props.startValue}
                     text={props.text}
                     disabled={props.disabled}
                     settingsDisabled={props.settingsDisabled}/>
            <div className={'button-wrapper'}>
                <Button title={'inc'} disabled={props.count === props.maxValue || props.disabled}
                        callback={props.increaseCount}/>
                <Button title={'reset'} disabled={props.count === 0 || props.disabled}
                        callback={props.resetCount}
                />
            </div>
        </div>
    );
};

export default Counter;