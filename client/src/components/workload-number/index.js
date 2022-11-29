import React from 'react'

import style from './number.module.scss'

const Number = ({color, number}) => {
  return (
    <div className={style.container}>
      <p className={style.para} style={color}>{number}</p>
    </div>
  )
}

export default Number
