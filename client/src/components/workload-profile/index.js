import React from 'react'

import style from './profile.module.scss'
import img from '../../assets/Ellipse 2.svg'

const Profile = () => {
    return (
        <div className={style.container}>
            <img className={style.img} src={img} alt="" />
            <div>
                <p className={style.para1}>PERSON 1</p>
                <p className={style.para2}>TEAM NAME</p>
            </div>
        </div>
    )
}

export default Profile
