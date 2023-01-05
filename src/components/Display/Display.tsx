import React from 'react';
import s from './Display.module.css'

type PropsType = {
    count: number
    text: string
    maxValue: number
    startValue: number
    disabled: boolean
    settingsDisabled: boolean
}

const Display: React.FC<PropsType> = ({count, maxValue, startValue, text, ...props}) => {

    return (
        <div className={s.wrapper}>
            <div
                className={(count === maxValue || props.settingsDisabled)
                    ? s.red
                    : s.count}>
                {props.disabled ? text : count}
            </div>
        </div>
    );
};

export default Display;