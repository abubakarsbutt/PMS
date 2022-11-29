import React from 'react'
import Tabs4 from '../../components/4tabs'
import Date from '../../components/date'
import Daytabs from '../../components/day tabs'
import Navbar from '../../components/layout/navbar'
import Sidebar from '../../components/layout/sidebar'
import Tabs from '../../components/tabs'
import Header from '../../components/workload-header'
import Table from '../../components/workload-table'

import style from './workload.module.scss'

const Workload = () => {
  return (
    <div className={style.container}>
      <div className={style.display}>
        <Sidebar />
        <div className={style.data}>
          <Navbar title="PROJECTS" />
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
            <Daytabs
              title1="DAY"
              title2="WEEK"
              title3="MONTH"
            />
            <Tabs4
              title1="ALL"
              title2="NEW"
              title3="BACKLOG"
              title4="BUGS"
            />
          </div>
          <Date
            startdate="03-OCT-22"
            enddate="09-OCT-22"
          />
          <Header />
          <div className={style.items}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workload
