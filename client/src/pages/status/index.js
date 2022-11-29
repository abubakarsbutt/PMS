import React from 'react'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import Tabs from '../../components/tabs'
import Tabs4 from '../../components/4tabs'
import Tabs2 from '../../components/2tabs'
import Date from '../../components/date'
import StatusHeader from '../../components/status-header'
import ItemsLine from '../../components/status-items line'

import style from './status.module.scss'

const Status = () => {
    return (
        <div className={style.container}>
            <div className={style.display}>
                <Sidebar />
                <div className={style.data}>
                    <Navbar title='PROJECTS' />
                    <div className={style.tab}>
                        <Tabs
                            title1="BOX"
                            title2="LIST"
                            title3="BOARD"
                            title4="TIMELINE"
                            title5="GANTT"
                            title6="WORKLOAD"
                            title7="STATUS"
                            title8="CALENDER" />
                    </div>
                    <div className={style.tabs}>
                        <Tabs4
                            title1="DAY"
                            title2="WEEK"
                            title3="MONTH"
                            title4="YEAR"
                        />
                        <Tabs2
                            title1="HOURS"
                            title2="TASK" />
                    </div>
                    <Date
                        startdate="03-OCT-22"
                        enddate="09-OCT-22"
                    />
                    <StatusHeader
                        pink={{ background: "rgba(248, 1, 1, 0.5)" }}
                        yellow={{ background: "#F9D30B" }}
                        green1={{ background: "#C2F359" }}
                        green2={{ background: "#7BDDA2" }}
                        green3={{ background: "#2D9274" }}
                        red={{ background: "#F50000" }}
                    />
                    <div className={style.items}>
                        {
                            itemsData.map(({ day, project, milestone, notstart, blocked, working, under, deliver, accept, reject }) => (
                                <ItemsLine
                                    day={day}
                                    project={project}
                                    milestone={milestone}
                                    notstart={notstart}
                                    blocked={blocked}
                                    working={working}
                                    under={under}
                                    deliver={deliver}
                                    accept={accept}
                                    reject={reject}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Status


const itemsData = [
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    },
    {
        day: "19 OCT 22,MON",
        project: "PROJECT NAME",
        milestone: "MILESTONE NAME",
        notstart: "191",
        blocked: "191",
        working: "191",
        under: "191",
        deliver: "191",
        accept: "191",
        reject: "191",
    }
]