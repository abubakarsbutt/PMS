import React from 'react'

import style from './daytabs.module.scss'
import { Link } from 'react-router-dom'

const Daytabs = (props) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="">{props.title1}</Link>
                <Link className={style.link} to="">{props.title2}</Link>
                <Link className={style.link1} to="">{props.title3}</Link>
            </div>
        </div>
    )
}

export default Daytabs
