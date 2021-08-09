import * as React from 'react';
import classNames from 'classnames';
import './style.scss'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean,
    className?: string
}

export const Input: React.FC<InputProps> = ({className}) => {

    const classes = classNames('vikingInputOutWrapper', className)

    return <div className={classes}>
        <input className='vikingInputInWrapper'></input>
    </div>
}