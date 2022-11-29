import React from 'react'

import style from './head.module.scss'

const Head = () => {
    return (
        <div className={style.container}>
            <p className={style.para}>NO.</p>
            <p className={style.para}>NAME</p>
            <p className={style.para}>EMAIL</p>
            <p className={style.para}>ROLE</p>
            <p className={style.para}>ACCOUNT STATUS</p>
            <p className={style.para}>LAST ACTIVE</p>
            <p className={style.para}>SETTINGS</p>
        </div>
    )
}

export default Head
