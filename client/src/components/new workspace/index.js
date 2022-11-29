import React from 'react'
import Textarea from '../textarea'

import style from './newworkspace.module.scss'

const NewWorkspace = () => {
    return (
        <div className={style.container}>
            <Textarea lable="WORK SPACE NAME" />
            <div className={style.display}>
                <label className={style.label} htmlFor="">NO. OF MEMBERS</label>
                <input className={style.input} type="text" />
                <label className={style.label1} htmlFor="">FONT</label>
                <input className={style.input1} type="text" />
            </div>
            <div className={style.color}>
                <label className={style.label2} htmlFor="">SELECT THEME COLOR</label>
                <label className={style.label3} htmlFor="">PRIMARY COLOR</label>
                <div className={style.grey}></div>
                <label className={style.label3} htmlFor="">SECONDARY COLOR</label>
                <div className={style.white}></div>
            </div>
            <Textarea lable="SELECT TIME ZONE" />
            <div className={style.invite}>
                <label className={style.label4} htmlFor="">INVITE PEOPLE</label>
                <textarea name="" id="" cols="56" rows="12" placeholder='ADD MULTIPLE TOGETHER WITH EMAIL'></textarea>
            </div>
        </div>
    )
}

export default NewWorkspace
