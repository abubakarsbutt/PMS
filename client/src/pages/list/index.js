import React from "react";
import Navbar from "../../components/layout/navbar";
import Sidebar from "../../components/layout/sidebar";
import ListHeader from "../../components/list-header";
import ListItems from "../../components/list-items";
import Tabs from "../../components/tabs";

import style from "./list.module.scss";
import redflag from "../../assets/Vector 5.svg";
import yellowflag from "../../assets/Vector 7.svg";

const List = () => {
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
              title8="CALENDER"
            />
          </div>
          <ListHeader />
          {itemsData.map(
            ({
              grey,
              img,
              bgColor,
              project,
              milestone,
              task,
              id,
              type,
              assignee,
              group,
              Status,
              expected,
              estimated,
              tracked,
              start,
              due,
              closed,
              qa,
              created,
            }) => (
              <ListItems
                project={project}
                milestone={milestone}
                task={task}
                id={id}
                type={type}
                assignee={assignee}
                priority={img}
                group={group}
                Status={Status}
                expected={expected}
                estimated={estimated}
                tracked={tracked}
                start={start}
                due={due}
                closed={closed}
                qa={qa}
                created={created}
                textColor={{ color: "white" }}
                bgColor={{
                  backgroundColor: bgColor ? bgColor : "red",
                }}
                grey={{
                  backgroundColor: grey ? grey : "red",
                }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default List;

const itemsData = [
  {
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    group: "NOT STARTED",
    Status: "TO DO",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#5C9FDD",
    grey: "rgba(0, 0, 0, 0.25)",
    img: redflag,
  },
  {
    img: redflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    priority: "",
    group: "BLOCKED",
    Status: "BLOCKED",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#5C9FDD",
    grey: "#F80101",
  },
  {
    img: yellowflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "TASK TYPE",
    assignee: "HM",
    priority: "",
    group: "WORKING ON",
    Status: "IN PROGRESS",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#A1D798",
    grey: "#F9D30B",
  },
  {
    img: yellowflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "TASK TYPE",
    assignee: "HM",
    priority: "",
    group: "UNDER QA",
    Status: "WAITING QA",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#A1D798",
    grey: "#C2F359",
  },
  {
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    priority: "",
    group: "NOT STARTED",
    Status: "TO DO",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#D76868",
    grey: "#7BDDA2",
    img: redflag,
  },
  {
    img: redflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    priority: "",
    group: "DELIVERED",
    Status: "CODE REVIEW",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#D76868",
    grey: "#2D9274",
  },
  {
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "TASK TYPE",
    assignee: "HM",
    priority: "",
    group: "NOT STARTED",
    Status: "TO DO",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#C25AE7",
    grey: "rgba(0, 0, 0, 0.25)",
    img: yellowflag,
  },
  {
    img: yellowflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "TASK TYPE",
    assignee: "HM",
    priority: "",
    group: "NOT STARTED",
    Status: "TO DO",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#C25AE7",
    grey: "rgba(0, 0, 0, 0.25)",
  },
  {
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    priority: "",
    group: "DELIVERED",
    Status: "DEV REVIEW",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#D76868",
    grey: "#7BDDA2",
    img: redflag,
  },
  {
    img: redflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    priority: "",
    group: "ACCEPTED",
    Status: "ACCEPTED",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#D76868",
    grey: "#2D9274",
  },
  {
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "TASK TYPE",
    assignee: "HM",
    priority: "",
    group: "NOT STARTED",
    Status: "TO DO",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#C25AE7",
    grey: "rgba(0, 0, 0, 0.25)",
    img: yellowflag,
  },
  {
    img: yellowflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "TASK TYPE",
    assignee: "HM",
    priority: "",
    group: "NOT STARTED",
    Status: "TO DO",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#C25AE7",
    grey: "rgba(0, 0, 0, 0.25)",
  },
  {
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    priority: "",
    group: "UNDER QA",
    Status: "WAITING QA",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#5C9FDD",
    grey: "#F9D30B",
    img: redflag,
  },
  {
    img: redflag,
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "UI FRONTEND",
    assignee: "HM",
    priority: "",
    group: "BLOCKED",
    Status: "BLOCKED",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#5C9FDD",
    grey: "#F80101",
  },
  {
    project: "PROJECT",
    milestone: "MILESTONE",
    task: "TASK",
    id: "TASK ID",
    type: "TASK TYPE",
    assignee: "HM",
    priority: "",
    group: "BLOCKED",
    Status: "BLOCKED",
    expected: "10:00",
    estimated: "07:30",
    tracked: "05:39",
    start: "22-OCT-2022",
    due: "22-OCT-2022",
    closed: "22-OCT-2022",
    qa: "HM",
    created: "HM",
    bgColor: "#A1D798",
    grey: "#F80101",
    img: yellowflag,
  },
];
