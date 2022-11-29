import React from 'react'
import { Link } from 'react-router-dom'

import style from './tabs4.module.scss'

const Tabs4 = (props) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="">{props.title1}</Link>
                <Link className={style.link} to="">{props.title2}</Link>
                <Link className={style.link} to="">{props.title3}</Link>
                <Link className={style.link1} to="">{props.title4}</Link>
            </div>
        </div>
    )
}

export default Tabs4
