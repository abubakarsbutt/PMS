import React from 'react'
import { Link } from 'react-router-dom'

import style from './settingtabs.module.scss'

const SettingTabs = (props) => {
    return (
        <div className={style.container}>
            <div className={style.tabs}>
                <Link className={style.link} to="/setting">{props.title1}</Link>
                <Link className={style.link} to="/members">{props.title2}</Link>
                <Link className={style.link} to="/workspace">{props.title3}</Link>
                <Link className={style.link1} to="">{props.title4}</Link>
            </div>
        </div>
    )
}

export default SettingTabs