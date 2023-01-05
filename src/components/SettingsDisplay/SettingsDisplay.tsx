import React, {ChangeEvent} from 'react';
import s from './SettingsDisplay.module.css'

type SettingsDisplayPropsType = {
    startValue: number
    maxValue: number
    onChangeStartValue: (startValue: number) => void
    onChangeMaxValue: (maxValue: number) => void
    setCount: (value: any) => void
    disabled: boolean
}

const SettingsDisplay = (props: SettingsDisplayPropsType) => {

    const errorStartValue = props.startValue < 0
        || props.maxValue === props.startValue
        || props.startValue > props.maxValue

    const errorMaxValue = props.maxValue === props.startValue
        || props.maxValue < props.startValue
        || props.maxValue < 0

    const onStartClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = e.currentTarget.value
        props.onChangeStartValue(+startValue)
    }

    const onMaxClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.value
        props.onChangeMaxValue(+maxValue)
    }

    return (
        <div className={s.wrapper}>
            <div>max value: <input value={props.maxValue} type={"number"} max="100" className={errorMaxValue ? s.error : ''}
                                   onChange={onMaxClickHandler}/></div>
            <div>start value: <input value={props.startValue} type={"number"} max="100" className={errorStartValue ? s.error : ''}
                                     onChange={onStartClickHandler}/></div>
        </div>
    );
};

export default SettingsDisplay;