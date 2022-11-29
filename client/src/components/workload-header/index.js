import React from 'react'

import style from './header.module.scss'

const Header = () => {
    return (
        <div className={style.container}>
            <table>
                <tr>
                    <th className={style.width}>ASSIGNEE</th>
                    <th className={style.width1}>CAPACITY</th>
                    <th className={style.width1}>ASSIGNED</th>
                    <th className={style.width1}>TRACKED</th>
                    <th className={style.width1}>COMPLETED</th>
                    <th className={style.width1}>MON 3 OCT</th>
                    <th className={style.width1}>TUE 4 OCT</th>
                    <th className={style.width1}>WED 5 OCT</th>
                    <th className={style.width1}>THU 6 OCT</th>
                    <th className={style.width1}>FRI 7 OCT</th>
                    <th className={style.width1}>SAT 8 OCT</th>
                    <th className={style.width1}>SUN 9 OCT</th>
                </tr>
            </table>
        </div>
    )
}

export default Header
