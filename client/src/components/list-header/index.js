import React from 'react'

import style from './listheader.module.scss'

const ListHeader = () => {
    return (
        <div className={style.container}>
            <p className={style.first}>PROJECT</p>
            <p className={style.first}>MILESTONE</p>
            <p className={style.second}>TASK NAME</p>
            <p className={style.third}>TASK ID</p>
            <p className={style.first}>TASK TYPE</p>
            <p className={style.third}>ASSIGNEE</p>
            <p className={style.third}>PRIORITY</p>
            <p className={style.third}>STATUS GROUP</p>
            <p className={style.third}>STATUS</p>
            <p className={style.third}>EXPECTED TIME</p>
            <p className={style.third}>ESTIMATED TIME</p>
            <p className={style.third}>TRACKED TIME</p>
            <p className={style.third}>START DATE</p>
            <p className={style.third}>DUE DATE</p>
            <p className={style.third}>CLOSED DATE</p>
            <p className={style.third}>QA BY</p>
            <p className={style.third}>CREATED BY</p>
        </div>
    )
}

export default ListHeader
