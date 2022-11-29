import React from 'react'
import ProgressBar from '../progress-bar'
import style from './card.module.scss'

import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/add-user.png'

const Card = ({title,Details, Add, todo, notdone, done, todoHour, notdoneHour, doneHour }) => {
    return (
        <div className={style.container}>
            <div className={style.name}>
                <p className={style.p1}>{title}</p>
                <p className={style.p2}>{Details}</p>
            </div>
            <div className={style.progress1}>
                <div className={style.same}>
                    <p className={style.para}>{todo}</p>
                    <p className={style.para}>TO DO</p>
                </div>
                <div className={style.same}>
                    <p className={style.para}>{notdone}</p>
                    <p className={style.para}>Not Done</p>
                </div>
                <div className={style.same}>
                    <p className={style.para}>{done}</p>
                    <p className={style.para}>Done</p>
                </div>
                <div className={style.bar}>
                    <ProgressBar />
                </div>
            </div>
            <div className={style.colorbar1}>
                <div className={style.pink}></div>
                <div className={style.grey}></div>
                <div className={style.red}></div>
                <div className={style.blue}></div>
                <div className={style.green}></div>
                <div className={style.purple}></div>
            </div>
            <div className={style.progress2}>
                <div className={style.same}>
                    <p className={style.para}>{todoHour}</p>
                    <p className={style.para}>TO DO</p>
                </div>
                <div className={style.same}>
                    <p className={style.para}>{notdoneHour}</p>
                    <p className={style.para}>Not Done</p>
                </div>
                <div className={style.same}>
                    <p className={style.para}>{doneHour}</p>
                    <p className={style.para}>Done</p>
                </div>
                <div className={style.bar}>
                    <ProgressBar />
                </div>
            </div>
            <div className={style.colorbar2}>
                <div className={style.grey}></div>
                <div className={style.yellow}></div>
                <div className={style.green}></div>
                <div className={style.purple}></div>
            </div>
            <div className={style.date}>
                <p className={style.para}>START DATE</p>
                <p className={style.para}>DELIVERY DATE</p>
            </div>
            <div className={style.details}>
                <div className={style.left}>
                    <p className={style.share}>SHARE WITH:</p>
                </div>
                <div className={style.right}>
                    <img className={style.img} src={img1} alt="" />
                    <img className={style.img} src={img2} alt="" />
                    <img className={style.img} src={img3} alt="" />
                    <img className={style.img} src={img4} alt="" />
                    <div className={style.add}>
                        <p className={style.para}>{Add}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
