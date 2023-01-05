import React from 'react';
import s from './Button.module.css'

type PropsType = {
    callback: () => void
    disabled: boolean
    title: string
}

const Button = (props: PropsType) => {

    return (
        <div className={s.wrapper}>
            <button className={s.button} disabled={props.disabled}
                    onClick={props.callback}
            >{props.title}</button>
        </div>
    );
};

export default Button;