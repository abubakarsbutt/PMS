import React from 'react'

import style from './date.module.scss'
import img from '../../assets/icons8-search.svg'
import img1 from '../../assets/Vector.svg'

const Date = ({ startdate, enddate }) => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img className={style.img} src={img} alt="" />
                <input className={style.input} type="text" placeholder='Search users' size={15} />
            </div>
            <img className={style.image} src={img1} alt="" />
            <div className={style.right}>
                <p className={style.para}>START DATE</p>
                <input className={style.date} type="date" name="date" id="date" />
                <p className={style.para}>END DATE</p>
                <input className={style.date} type="date" name="date" id="date" />
            </div>
        </div>
    )
}

export default Date
