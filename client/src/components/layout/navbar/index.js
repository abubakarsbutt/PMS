import React from 'react'
import style from './navbar.module.scss'

const Navbar = (props) => {
    return (
        <div className={style.container}>
            <p className={style.para}>{props.title}</p>
        </div>
    )
}

export default Navbar
