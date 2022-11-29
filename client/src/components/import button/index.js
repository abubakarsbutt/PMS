import React from 'react'

import style from './importbutton.module.scss'

const ImportButton = () => {
    return (
        <div className={style.container}>
            <div className={style.btn}>
                <button className={style.button}>Import</button>
            </div>
        </div>
    )
}

export default ImportButton
