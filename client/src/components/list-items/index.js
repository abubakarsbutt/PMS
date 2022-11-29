import React from 'react'

import style from './listitems.module.scss'


const ListItems = ({ textColor, project, milestone, task, id, type, assignee, priority, group, Status, expected, estimated, tracked, start, due, closed, qa, created, bgColor, grey }) => {
    return (
        <div className={style.container}>
            <p className={style.first}>{project}</p>
            <p className={style.first}>{milestone}</p>
            <p className={style.second}>{task}</p>
            <p className={style.third}>{id}</p>
            <p className={style.first} style={bgColor}>{type}</p>
            <p className={style.third}>
                <div className={style.assignee} style={textColor}>
                    <p>{assignee}</p>
                </div>  
            </p>
            <p className={style.third}>
                <img src={priority} alt="" />
            </p>
            <p className={style.third} style={grey}>{group}</p>
            <p className={style.third} style={grey}>{Status}</p>
            <p className={style.third}>{expected}</p>
            <p className={style.third}>{estimated}</p>
            <p className={style.third}>{tracked}</p>
            <p className={style.third}>{start}</p>
            <p className={style.third}>{due}</p>
            <p className={style.third}>{closed}</p>
            <p className={style.third}>
                <div className={style.assignee} style={textColor}>
                    <p>{qa}</p>
                </div>
            </p>
            <p className={style.third}>
                <div className={style.assignee} style={textColor}>
                    <p>{created}</p>
                </div>
            </p>
        </div>
    )
}

export default ListItems
