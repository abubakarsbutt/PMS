import React from 'react'

import style from './graph.module.scss'

const Graph = ({ first, second, third }) => {
    return (
        <div className={style.container}>
            <div className={style.graph}>
                <div className={style.top}>
                    <div className={style.top_sec}>
                        <p className={style.para}>{first}</p>
                    </div>
                </div>
                <div className={style.mid}>
                    <div className={style.mid_sec}>
                        <p className={style.para}>{second}</p>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.bottom_sec}>
                        <p className={style.para}>{third}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph
