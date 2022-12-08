import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Members from "../pages/setting/members";
import MySetting from "../pages/setting/my-setting";
import Login from "../pages/setting/login";
import Workspace from "../pages/setting/workspace";
import Detailpage from "../pages/setting/workspace/detail page";
import Workload from "../pages/workload";
import ProjectName from "../pages/project-name";
import Status from "../pages/status";
import List from "../pages/list";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setting" element={<MySetting />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/detailpage" element={<Detailpage />} />
          <Route path="/workload" element={<Workload />} />
          <Route path="/projectname" element={<ProjectName />} />
          <Route path="/status" element={<Status />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
