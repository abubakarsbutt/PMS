import React from 'react'
import style from './sidebar.module.scss'

import img from '../../../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={img} alt="" />
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/projectname">Project Name</Link>
        <Link to="/setting">Settings </Link>
      </ul>
    </div>
  )
}

export default Sidebar
