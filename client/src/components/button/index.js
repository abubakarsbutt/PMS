import React from 'react'

import style from './button.module.scss'

const Button = (props) => {
    return (
        <div>
            <button className={style.btn1}>{props.title}</button>
        </div>
    )
}

export default Button
