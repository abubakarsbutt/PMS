import React from 'react'

import style from './statusheader.module.scss'

const StatusHeader = ({pink , yellow, green1, green2, green3, red}) => {
    return (
        <div className={style.container}>
            <table>
                <tr>
                    <th className={style.first}>DAY</th>
                    <th className={style.second}>PROJECT</th>
                    <th className={style.second}>MILESTONE</th>
                    <th className={style.color}>NOT START</th>
                    <th className={style.color} style={pink}>BLOCKED</th>
                    <th className={style.color} style={yellow}>WORKING <br /> ON</th>
                    <th className={style.color} style={green1}>UNDER QA</th>
                    <th className={style.color} style={green2}>DELIVERED</th>
                    <th className={style.color} style={green3}>ACCEPTED</th>
                    <th className={style.color} style={red}>REJECTED</th>
                </tr>
            </table>
        </div>
    )
}

export default StatusHeader
