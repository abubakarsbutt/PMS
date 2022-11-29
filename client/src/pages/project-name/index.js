import React from 'react'
import Sidebar from '../../components/layout/sidebar'
import Navbar from '../../components/layout/navbar'
import Card from '../../components/card/index'
import Pagination from '../../components/pagination'
import Tabs from '../../components/tabs/index'

import style from './projectname.module.scss'
import { useState } from 'react'
import ImportButton from '../../components/import button'

const ProjectName = () => {
  const [pageSize, setPageSize] = useState(10);
  const [totalCount] = useState();
  const [page, setPage] = useState(1);


  return (
    <div className={style.container}>
      <div className={style.display}>
        <Sidebar />
        <div className={style.data}>
          <Navbar title="PROJECT NAME" />
          <div className={style.tabs}>
            <Tabs
              title1="BOX"
              title2="LIST"
              title3="BOARD"
              title4="TIMELINE"
              title5="GANTT"
              title6="WORKLOAD"
              title7="STATUS"
              title8="CALENDER"
            />
            <ImportButton />
          </div>
          <div className={style.card}>
          {
              cardData.map(({ title, Details, Add, todo, notdone, done, todoHour, notdoneHour, doneHour }) => (
                <Card
                  title={title}
                  Details={Details}
                  Add={Add}
                  todo={todo}
                  notdone={notdone}
                  done={done}
                  todoHour={todoHour}
                  notdoneHour={notdoneHour}
                  doneHour={doneHour}
                />
              ))
            }
          </div>
          <div className={style.pagination}>
            <Pagination
              setCount={setPageSize}
              count={pageSize}
              totalCount={totalCount}
              setPage={setPage}
              page={page}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectName

const cardData = [
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" },
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" },
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" },
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" },
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" },
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" },
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" },
  { title: "Milestone Name", Details: "Details", Add: "Add People", todo: "10", notdone: "13", done: "0", todoHour: "132h", notdoneHour: "132h", doneHour: "0h" }
]