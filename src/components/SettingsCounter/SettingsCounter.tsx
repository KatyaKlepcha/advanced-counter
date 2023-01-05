import React from 'react';
import SettingsDisplay from "../SettingsDisplay/SettingsDisplay";
import Button from "../Button/Button";

type SettingsCounterType = {
    startValue: number
    maxValue: number
    disabled: boolean
    onChangeStartValue: (startValue: number) => void
    onChangeMaxValue: (maxValue: number) => void
    setCount: (count: number) => void
    setToLocalStorage: () => void

}

const SettingsCounter = (props: SettingsCounterType) => {
    return (
        <div className={'settings-counter'}>
            <SettingsDisplay
                startValue={props.startValue}
                maxValue={props.maxValue}
                disabled={props.disabled}
                onChangeStartValue={props.onChangeStartValue}
                onChangeMaxValue={props.onChangeMaxValue}
                setCount={props.setCount}
            />
            <Button title={'set'}
                    disabled={props.disabled}
                    callback={props.setToLocalStorage}
            />
        </div>
    );
};

export default SettingsCounter;