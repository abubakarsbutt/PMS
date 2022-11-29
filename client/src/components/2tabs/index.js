import React from 'react'
import { Link } from 'react-router-dom'

import style from './tabs2.module.scss'

const Tabs2 = (props) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="">{props.title1}</Link>
                <Link className={style.link1} to="">{props.title2}</Link>
            </div>
        </div>
    )
}

export default Tabs2
