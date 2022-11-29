import React from 'react'

import style from './itemsline.module.scss'

const ItemsLine = ({day, project, milestone, notstart, blocked, working, under, deliver, accept, reject }) => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <p>{day}</p>
                <p>{project}</p>
                <p>{milestone}</p>
            </div>
            <div className={style.right}>
                <p>{notstart}</p>
                <p>{blocked}</p>
                <p>{working}</p>
                <p>{under}</p>
                <p>{deliver}</p>
                <p>{accept}</p>
                <p>{reject}</p>
            </div>
        </div>
    )
}

export default ItemsLine
